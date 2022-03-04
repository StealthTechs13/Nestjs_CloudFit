"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const gallery_service_1 = require("./gallery.service");
const gallery_controller_1 = require("./gallery.controller");
const prisma_1 = (0, tslib_1.__importDefault)(require("../../services/prisma"));
let GalleryModule = class GalleryModule {
};
GalleryModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [gallery_controller_1.GalleryController],
        providers: [gallery_service_1.GalleryService, prisma_1.default],
    })
], GalleryModule);
exports.GalleryModule = GalleryModule;
//# sourceMappingURL=gallery.module.js.map