import PrismaService from '@services/prisma';
import { UpdateWebsiteSettingsDto } from './dto';
export declare class WebsiteSettingsService {
    private prisma;
    constructor(prisma: PrismaService);
    updateWebsiteSettings(data: UpdateWebsiteSettingsDto): Promise<{
        status: string;
        message: string;
    }>;
    getSettings(): Promise<{
        status: string;
        message: import(".prisma/client").WebsiteSettings;
    }>;
}
