import { HttpStatus } from '@nestjs/common';
import PrismaService from '@services/prisma';
import { CreateContactUsDto } from './dto';
export declare class ContactUsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createContactUsDto: CreateContactUsDto): Promise<{
        success: boolean;
        message: string;
        statusCode?: undefined;
    } | {
        success: boolean;
        message: string;
        statusCode: HttpStatus;
    }>;
    findAll(): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import(".prisma/client").Contact[];
    } | {
        message: string;
        statusCode: HttpStatus;
        data?: undefined;
    }>;
}
