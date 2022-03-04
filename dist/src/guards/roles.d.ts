import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import PrismaService from '@services/prisma';
import { Observable } from 'rxjs';
declare class UserRolesGuard implements CanActivate {
    private reflector;
    private readonly prismaService;
    constructor(reflector: Reflector, prismaService: PrismaService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
export default UserRolesGuard;
