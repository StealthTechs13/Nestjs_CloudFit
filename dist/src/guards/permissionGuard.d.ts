import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import PrismaService from '@services/prisma';
export declare class PermissionsGuard implements CanActivate {
    private reflector;
    private readonly prismaService;
    constructor(reflector: Reflector, prismaService: PrismaService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
