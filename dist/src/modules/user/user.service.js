"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const app_1 = require("../../types/interfaces/app");
const prisma_1 = (0, tslib_1.__importDefault)(require("../../services/prisma"));
const user_dto_1 = require("./dto/user.dto");
const app_2 = require("../../constants/app");
const storage_1 = (0, tslib_1.__importDefault)(require("../../services/storage"));
let UserService = class UserService {
    prisma;
    storageService;
    constructor(prisma, storageService) {
        this.prisma = prisma;
        this.storageService = storageService;
    }
    async updateProfile(userId, userData) {
        if (!(await this.prisma.admin.findUnique({ where: { uid: userId } })))
            throw new common_1.NotFoundException('User not found');
        const users = await this.prisma.admin.findMany({
            where: { uid: { not: userId } },
            select: { email: true },
        });
        if (users.find((user) => user.email === userData.email))
            throw new common_1.BadRequestException('This email is associated with another account');
        const updatedUser = await this.prisma.admin.update({
            where: { uid: userId },
            data: { ...userData },
            select: app_2.adminReturnData
        });
        return {
            statusCode: 200,
            message: 'User record update successfully',
            data: updatedUser
        };
    }
    async updateUserProfileImage(userId, image) {
        if (!image)
            throw new common_1.BadRequestException('Please provide a profile Image');
        const uploaded = await this.storageService.newUserProfileAttachment(userId, image);
        const updatedRecord = await this.prisma.admin.update({
            where: { uid: userId },
            data: { profileImage: uploaded.Location },
            select: app_2.adminReturnData
        });
        return {
            statusCode: 200,
            message: 'Profile picture changed successfullly',
            data: updatedRecord,
        };
    }
};
UserService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [prisma_1.default,
        storage_1.default])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map