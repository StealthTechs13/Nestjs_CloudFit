"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const role_service_1 = require("./role.service");
const dto_1 = require("./dto");
const dto_user_1 = require("./dto-user");
const client_1 = require("@prisma/client");
const roles_1 = (0, tslib_1.__importDefault)(require("../../guards/roles"));
const jwt_auth_guard_1 = require("../../guards/jwt-auth.guard");
const auth_1 = (0, tslib_1.__importDefault)(require("../../guards/auth"));
const verification_1 = (0, tslib_1.__importDefault)(require("../../guards/verification"));
const auth_2 = require("../../types/enums/auth");
const auth_3 = require("../../utils/decorators/auth");
const permissionGuard_1 = require("../../guards/permissionGuard");
let RoleController = class RoleController {
    roleService;
    constructor(roleService) {
        this.roleService = roleService;
    }
    async createRole(body) {
        return await this.roleService.addRole(body);
    }
    async getAllRoles(query) {
        let { limit, page, sort, isActivated, } = query;
        if (query.q) {
            return this.roleService.search(query.q);
        }
        if (!limit)
            limit = 10;
        if (!page)
            page = 1;
        if (!isActivated)
            isActivated = 5;
        if (!sort)
            sort = 'id';
        return await this.roleService.findAll(limit, page, sort, +isActivated);
    }
    async getRole(roleId) {
        return await this.roleService.getRole(roleId);
    }
    async updateRolePermissions(roleId, body) {
        await this.roleService.getRole(roleId);
        return await this.roleService.updateRolePermissions(roleId, body.permissions);
    }
    async updateRole(roleId, body) {
        await this.roleService.getRole(roleId);
        return await this.roleService.updateRole(roleId, body);
    }
    async deleteRole(roleId) {
        await this.roleService.getRole(roleId);
        return await this.roleService.deleteRole(roleId);
    }
    async removeMany(ids) {
        return await this.roleService.removeMany(ids);
    }
    async createAdminUser(body) {
        return this.roleService.register(body);
    }
    async listAdminUser(query) {
        let { limit, page, sort, isActivated } = query;
        if (query.q) {
            return this.roleService.searchAdminUser(query.q);
        }
        if (!limit)
            limit = 10;
        if (!page)
            page = 1;
        if (!isActivated)
            isActivated = 1;
        if (!sort)
            sort = 'id';
        return await this.roleService.findAllAdminUser(limit, page, sort, +isActivated);
    }
    async getPermissions() {
        return Object.keys(client_1.PERMISSIONS);
    }
    async updateAdminUserRole(userId, roleId) {
        return this.roleService.updateSelectedUserRole(userId, roleId);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Post)('/'),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [dto_1.CreateRoleDto]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RoleController.prototype, "createRole", null);
(0, tslib_1.__decorate)([
    (0, common_1.Get)('/'),
    (0, tslib_1.__param)(0, (0, common_1.Query)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RoleController.prototype, "getAllRoles", null);
(0, tslib_1.__decorate)([
    (0, common_1.Get)('/:roleId'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('roleId')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RoleController.prototype, "getRole", null);
(0, tslib_1.__decorate)([
    (0, common_1.Patch)('/:roleId/permissions'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('roleId')),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, dto_1.UpdateRolePrivileges]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RoleController.prototype, "updateRolePermissions", null);
(0, tslib_1.__decorate)([
    (0, common_1.Patch)('/:roleId'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('roleId')),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, dto_1.UpdateRoleDto]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RoleController.prototype, "updateRole", null);
(0, tslib_1.__decorate)([
    (0, common_1.Delete)('/:roleId'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('roleId')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RoleController.prototype, "deleteRole", null);
(0, tslib_1.__decorate)([
    (0, common_1.Delete)(),
    (0, tslib_1.__param)(0, (0, common_1.Body)('ids')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Array]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RoleController.prototype, "removeMany", null);
(0, tslib_1.__decorate)([
    (0, common_1.Post)('/create-admin-user'),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [dto_user_1.RegisterDto]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RoleController.prototype, "createAdminUser", null);
(0, tslib_1.__decorate)([
    (0, common_1.Get)('/admin/list'),
    (0, tslib_1.__param)(0, (0, common_1.Query)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RoleController.prototype, "listAdminUser", null);
(0, tslib_1.__decorate)([
    (0, common_1.Get)('/get-permissions/list'),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RoleController.prototype, "getPermissions", null);
(0, tslib_1.__decorate)([
    (0, common_1.Patch)('/assign-role/:userId/:roleId'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('userId')),
    (0, tslib_1.__param)(1, (0, common_1.Param)('roleId')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RoleController.prototype, "updateAdminUserRole", null);
RoleController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('/roles'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_1.default, permissionGuard_1.PermissionsGuard),
    (0, tslib_1.__metadata)("design:paramtypes", [role_service_1.RolesService])
], RoleController);
exports.RoleController = RoleController;
//# sourceMappingURL=role.controller.js.map