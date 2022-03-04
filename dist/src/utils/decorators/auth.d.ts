import { VerificationStatus } from '@enum/auth';
import { USER_ROLES, PERMISSIONS } from '@prisma/client';
export declare const VerificationAccess: (status: VerificationStatus) => import("@nestjs/common").CustomDecorator<string>;
export declare const UserRoles: (...roles: USER_ROLES[]) => import("@nestjs/common").CustomDecorator<string>;
export declare const UsePermissions: (...permissions: PERMISSIONS[]) => import("@nestjs/common").CustomDecorator<string>;
