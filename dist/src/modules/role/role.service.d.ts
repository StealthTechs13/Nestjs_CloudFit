import { HttpStatus } from '@nestjs/common';
import PrismaService from '../../services/prisma';
import { Prisma, PERMISSIONS } from '@prisma/client';
import { RegisterDto } from '@modules/role/dto-user';
import { CreateRoleDto } from '@modules/role/dto';
export declare class RolesService {
    private prisma;
    constructor(prisma: PrismaService);
    addRole(data: CreateRoleDto): Promise<{
        status: string;
        message: string;
    }>;
    search(query: string): Promise<import(".prisma/client").Roles[]>;
    findAll(limit: number, page: number, sort: string, isActivated: number): Promise<{
        roless: {
            ress: import(".prisma/client").Roles;
            acccounts: number;
        }[];
        totalPages: number;
        currentPage: number;
        sort: string;
    }>;
    getRole(roleId: string): Promise<{
        status: string;
        message: import(".prisma/client").Roles;
    }>;
    updateRolePermissions(roleId: string, permissions: PERMISSIONS[]): Promise<import(".prisma/client").Roles>;
    updateRole(roleId: string, data: Prisma.RolesUpdateInput): Promise<{
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
    register(data: RegisterDto): Promise<{
        status: string;
        message: string;
    }>;
    findAllAdminUser(limit: number, page: number, sort: string, isActivated: number): Promise<{
        res: import(".prisma/client").Admin[];
        totalPages: number;
        currentPage: number;
        sort: string;
    }>;
    searchAdminUser(query: string): Promise<import(".prisma/client").Admin[]>;
    updateSelectedUserRole(userId: string, roleId: string): Promise<{
        status: HttpStatus;
        message: string;
    }>;
}
