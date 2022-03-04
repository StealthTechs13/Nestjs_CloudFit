"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const app_1 = require("../../types/interfaces/app");
const prisma_1 = (0, tslib_1.__importDefault)(require("../../services/prisma"));
const password_helper_1 = require("../../utils/password.helper");
const crypto_1 = require("crypto");
const mail_service_1 = require("../mail/mail.service");
let AuthService = class AuthService {
    prisma;
    jwtService;
    mailService;
    constructor(prisma, jwtService, mailService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.mailService = mailService;
    }
    async generateJwt(id, userId) {
        return this.jwtService.signAsync({
            userId: { id: id, userId: userId },
            options: {
                expiresIn: '10000s',
            },
        });
    }
    async login(user) {
        console.log(user);
        const userExist = await this.prisma.admin.findUnique({
            where: { email: user.email },
        });
        if (!userExist)
            throw new common_1.NotFoundException('Account not found');
        if (userExist && !userExist.isActivated)
            throw new common_1.UnauthorizedException('Account not activated');
        const comfirmPass = await (0, password_helper_1.confirmPassword)(user.password, userExist.password);
        if (!comfirmPass)
            throw new common_1.UnauthorizedException('Invalid password');
        const token = await this.generateJwt(userExist.id, userExist.uid);
        const returnData = {
            firstName: userExist.firstName,
            lastName: userExist.lastName,
            email: userExist.email,
            uid: userExist.uid,
        };
        return {
            statusCode: 200,
            message: 'Login successful',
            data: { token: token, user: returnData },
        };
    }
    async getUserByEmail(email) {
        try {
            return this.prisma.admin.findUnique({ where: { email: email } });
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async generateResetToken(userId) {
        try {
            const secreteToken = (0, crypto_1.randomBytes)(32).toString('hex');
            const passwordResetToken = (0, crypto_1.createHash)('sha256')
                .update(secreteToken)
                .digest('hex');
            await this.prisma.admin.update({
                where: { uid: userId },
                data: {
                    passwordResetToken,
                    passwordResetExpires: new Date(Date.now() + 10 * 60 * 1000),
                },
            });
            return passwordResetToken;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    async sendPasswordResetMail(payload) {
        this.mailService.sendMail({
            templateName: 'password_reset',
            subject: 'Cloudfift Admin Password Reset',
            recipients: [payload.email],
            payload: payload,
        });
    }
    async getUserByResetToken(token) {
        const user = await this.prisma.admin.findFirst({
            where: {
                passwordResetToken: token,
                passwordResetExpires: { gt: new Date() },
            },
        });
        if (!user)
            throw new common_1.UnauthorizedException('Invalid reset token');
        return user;
    }
    async resetUserPassword(userId, body) {
        const password = await (0, password_helper_1.hashPassword)(body.password);
        return this.prisma.admin.update({
            where: { uid: userId },
            data: {
                password,
                passwordResetToken: null,
                passwordResetExpires: null,
                passwordChangedAt: new Date(),
            },
        });
    }
};
AuthService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [prisma_1.default,
        jwt_1.JwtService,
        mail_service_1.MailService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map