import { RolesService } from '@modules/role/role.service';
import { CreateRoleDto, UpdateRoleDto, UpdateRolePrivileges } from '@modules/role/dto';
import { RegisterDto } from '@modules/role/dto-user';
export declare class RoleController {
    private roleService;
    constructor(roleService: RolesService);
    createRole(body: CreateRoleDto): Promise<{
        status: string;
        message: string;
    }>;
    getAllRoles(query: any): Promise<any>;
    getRole(roleId: string): Promise<{
        status: string;
        message: import(".prisma/client").Roles;
    }>;
    updateRolePermissions(roleId: string, body: UpdateRolePrivileges): Promise<import(".prisma/client").Roles>;
    updateRole(roleId: string, body: UpdateRoleDto): Promise<{
        status: string;
        message: string;
    }>;
    deleteRole(roleId: string): Promise<{
        status: string;
        message: string;
    }>;
    removeMany(ids: Array<string>): Promise<{
        status: string;
        message: string;
    }>;
    createAdminUser(body: RegisterDto): Promise<{
        status: string;
        message: string;
    }>;
    listAdminUser(query: any): Promise<any>;
    getPermissions(): Promise<string[]>;
    updateAdminUserRole(userId: string, roleId: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
}
