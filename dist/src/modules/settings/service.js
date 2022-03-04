"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsiteSettingsService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const prisma_1 = (0, tslib_1.__importDefault)(require("../../services/prisma"));
let WebsiteSettingsService = class WebsiteSettingsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async updateWebsiteSettings(data) {
        const { logo, favicon, banner, metaDescription, keywords, author, privacyPolicy, legal, termsAndConditions } = data;
        try {
            const update = await this.prisma.websiteSettings.update({
                where: {
                    id: 1
                },
                data: {
                    logo: logo,
                    favicon: favicon,
                    banner: banner,
                    metaDescription: metaDescription,
                    keywords: keywords,
                    Author: author,
                    privacyPolicy: privacyPolicy,
                    legal: legal,
                    termsAndConditions: termsAndConditions
                }
            });
            if (update) {
                return { status: 'success', message: 'Website Details Updated' };
            }
            throw new common_1.BadRequestException({ status: 'failed', message: 'Failed to update website details, please check input' });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({ status: 'failed', message: 'An Error Occurred!' });
        }
    }
    async getSettings() {
        try {
            const settings = await this.prisma.websiteSettings.findFirst({
                where: {
                    id: 1
                }
            });
            return { status: 'success', message: settings };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({ status: 'failed', message: 'An Error Occurred!' });
        }
    }
};
WebsiteSettingsService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [prisma_1.default])
], WebsiteSettingsService);
exports.WebsiteSettingsService = WebsiteSettingsService;
//# sourceMappingURL=service.js.map