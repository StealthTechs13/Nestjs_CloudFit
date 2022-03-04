"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const prisma_1 = (0, tslib_1.__importDefault)(require("../../services/prisma"));
const helper_1 = require("../../utils/helper");
let GalleryService = class GalleryService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(file) {
        try {
            const uploadedFile = await (0, helper_1.fileUpload)(file);
            console.log(uploadedFile);
            const imageName = uploadedFile.message;
            const imageUpload = await this.prisma.gallery.create({
                data: { imageName },
            });
            if (!imageUpload) {
                throw new common_1.BadRequestException({
                    status: 'failed',
                    message: 'Asset could not be uploaded',
                });
            }
            return {
                status: 'success',
                message: imageUpload,
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async findAll() {
        try {
            const data = await this.prisma.gallery.findMany();
            if (data) {
                const imagePath = process.env.IMG_PATH;
                const payload = { data, imagePath };
                return {
                    status: 'success',
                    message: payload,
                };
            }
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async findOne(id) {
        const dataFound = await this.prisma.gallery.findUnique({
            where: { id },
        });
        if (dataFound) {
            return {
                status: 'success',
                message: {
                    data: dataFound,
                },
            };
        }
        throw new common_1.HttpException(`failed`, common_1.HttpStatus.NOT_FOUND);
    }
};
GalleryService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [prisma_1.default])
], GalleryService);
exports.GalleryService = GalleryService;
//# sourceMappingURL=gallery.service.js.map