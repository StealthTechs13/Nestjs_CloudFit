"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsePermissions = exports.UserRoles = exports.VerificationAccess = void 0;
const common_1 = require("@nestjs/common");
const auth_1 = require("../../types/enums/auth");
const auth_2 = require("../../constants/auth");
const VerificationAccess = (status) => (0, common_1.SetMetadata)(auth_2.VERIFICATION_KEY, status);
exports.VerificationAccess = VerificationAccess;
const UserRoles = (...roles) => (0, common_1.SetMetadata)(auth_2.USER_ROLES_KEY, roles);
exports.UserRoles = UserRoles;
const UsePermissions = (...permissions) => (0, common_1.SetMetadata)(auth_2.PERMISSIONS_KEY, permissions);
exports.UsePermissions = UsePermissions;
//# sourceMappingURL=auth.js.map