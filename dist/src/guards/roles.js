"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const auth_1 = require("../constants/auth");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const client_1 = require("@prisma/client");
const prisma_1 = (0, tslib_1.__importDefault)(require("../services/prisma"));
let UserRolesGuard = class UserRolesGuard {
    reflector;
    prismaService;
    constructor(reflector, prismaService) {
        this.reflector = reflector;
        this.prismaService = prismaService;
    }
    canActivate(context) {
        const requiredRoles = this.reflector.getAllAndOverride(auth_1.USER_ROLES_KEY, [context.getHandler(), context.getClass()]);
        if (!requiredRoles)
            return true;
        const req = context.switchToHttp().getRequest();
        req.isAdmin = req.user.type === client_1.USER_ROLES.ADMIN;
        req.isGuest = req.user.type === client_1.USER_ROLES.GUEST;
        req.isMember = req.user.type === client_1.USER_ROLES.MEMBER;
        return this.prismaService.admin.findFirst({
            where: { uid: req.user.uid },
        }).then(res => {
            if (!requiredRoles.includes(res.role))
                throw new common_1.ForbiddenException('User role does not have right access to this resource');
            return true;
        });
    }
};
UserRolesGuard = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [core_1.Reflector,
        prisma_1.default])
], UserRolesGuard);
exports.default = UserRolesGuard;
//# sourceMappingURL=roles.js.map