"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const gallery_service_1 = require("./gallery.service");
const platform_express_1 = require("@nestjs/platform-express");
const roles_1 = (0, tslib_1.__importDefault)(require("../../guards/roles"));
const jwt_auth_guard_1 = require("../../guards/jwt-auth.guard");
const auth_1 = require("../../utils/decorators/auth");
let GalleryController = class GalleryController {
    galleryService;
    constructor(galleryService) {
        this.galleryService = galleryService;
    }
    create(req, file) {
        if (!file) {
            return new common_1.BadRequestException({
                status: 'failed',
                message: 'file is required',
            });
        }
        return this.galleryService.create(file);
    }
    findAll() {
        return this.galleryService.findAll();
    }
    findOne(id) {
        return this.galleryService.findOne(+id);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, tslib_1.__param)(0, (0, common_1.Request)()),
    (0, tslib_1.__param)(1, (0, common_1.UploadedFile)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], GalleryController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, common_1.Get)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], GalleryController.prototype, "findAll", null);
(0, tslib_1.__decorate)([
    (0, common_1.Get)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], GalleryController.prototype, "findOne", null);
GalleryController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('gallery'),
    (0, tslib_1.__metadata)("design:paramtypes", [gallery_service_1.GalleryService])
], GalleryController);
exports.GalleryController = GalleryController;
//# sourceMappingURL=gallery.controller.js.map