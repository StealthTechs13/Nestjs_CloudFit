"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsGuard = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const prisma_1 = (0, tslib_1.__importDefault)(require("../services/prisma"));
const auth_1 = require("../constants/auth");
let PermissionsGuard = class PermissionsGuard {
    reflector;
    prismaService;
    constructor(reflector, prismaService) {
        this.reflector = reflector;
        this.prismaService = prismaService;
    }
    canActivate(context) {
        const requiredPermissions = this.reflector.getAllAndOverride(auth_1.PERMISSIONS_KEY, [context.getHandler(), context.getClass()]);
        if (!requiredPermissions) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        return this.prismaService.admin
            .findFirst({
            where: { uid: request.user.uid },
            include: { adminRole: true },
        })
            .then((res) => {
            if (!res.adminRole?.permissions.some((permit) => requiredPermissions.includes(permit)))
                throw new common_1.ForbiddenException('User role does not have right permission to this resource');
            return true;
        });
    }
};
PermissionsGuard = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [core_1.Reflector,
        prisma_1.default])
], PermissionsGuard);
exports.PermissionsGuard = PermissionsGuard;
//# sourceMappingURL=permissionGuard.js.map