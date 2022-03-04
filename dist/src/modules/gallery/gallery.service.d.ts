/// <reference types="multer" />
import PrismaService from '@services/prisma';
export declare class GalleryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(file: Express.Multer.File): Promise<{
        status: string;
        message: import(".prisma/client").Gallery;
    }>;
    findAll(): Promise<{
        status: string;
        message: {
            data: import(".prisma/client").Gallery[];
            imagePath: string;
        };
    }>;
    findOne(id: number): Promise<{
        status: string;
        message: {
            data: import(".prisma/client").Gallery;
        };
    }>;
}
