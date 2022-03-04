"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const role_controller_1 = require("./role.controller");
const role_service_1 = require("./role.service");
const prisma_1 = (0, tslib_1.__importDefault)(require("../../services/prisma"));
let RoleModule = class RoleModule {
};
RoleModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [],
        controllers: [role_controller_1.RoleController],
        providers: [
            role_service_1.RolesService,
            prisma_1.default,
        ],
    })
], RoleModule);
exports.default = RoleModule;
//# sourceMappingURL=module.js.map