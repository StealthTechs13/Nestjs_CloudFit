"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const user_controller_1 = (0, tslib_1.__importDefault)(require("./user.controller"));
const user_service_1 = require("./user.service");
const prisma_1 = (0, tslib_1.__importDefault)(require("../../services/prisma"));
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const jwt_auth_guard_1 = require("../../guards/jwt-auth.guard");
const jwt_strategy_1 = require("../../services/jwt.strategy");
const mail_service_1 = require("../mail/mail.service");
const email_1 = (0, tslib_1.__importDefault)(require("../../services/email"));
const storage_1 = (0, tslib_1.__importDefault)(require("../../services/storage"));
let UserModule = class UserModule {
};
UserModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: '172800s' },
            }),
        ],
        controllers: [user_controller_1.default],
        providers: [
            passport_1.PassportModule,
            user_service_1.UserService,
            prisma_1.default,
            jwt_strategy_1.JwtStrategy,
            jwt_auth_guard_1.JwtAuthGuard,
            mail_service_1.MailService,
            email_1.default,
            storage_1.default
        ],
    })
], UserModule);
exports.default = UserModule;
//# sourceMappingURL=user.module.js.map