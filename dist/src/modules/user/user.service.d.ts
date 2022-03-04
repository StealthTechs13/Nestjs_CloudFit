/// <reference types="multer" />
import { ServerResp } from '@interface/app';
import PrismaService from '@services/prisma';
import { UpdateProfileDto } from '@modules/user/dto/user.dto';
import StorageService from '@services/storage';
export declare class UserService {
    private prisma;
    private readonly storageService;
    constructor(prisma: PrismaService, storageService: StorageService);
    updateProfile(userId: string, userData: UpdateProfileDto): Promise<ServerResp>;
    updateUserProfileImage(userId: string, image: Express.Multer.File): Promise<ServerResp>;
}
