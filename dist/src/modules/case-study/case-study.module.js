"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseStudyModule = void 0;
const tslib_1 = require("tslib");
const gallery_service_1 = require("./../gallery/gallery.service");
const common_1 = require("@nestjs/common");
const case_study_service_1 = require("./case-study.service");
const case_study_controller_1 = require("./case-study.controller");
const prisma_1 = (0, tslib_1.__importDefault)(require("../../services/prisma"));
let CaseStudyModule = class CaseStudyModule {
};
CaseStudyModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [case_study_controller_1.CaseStudyController],
        providers: [case_study_service_1.CaseStudyService, prisma_1.default, gallery_service_1.GalleryService],
    })
], CaseStudyModule);
exports.CaseStudyModule = CaseStudyModule;
//# sourceMappingURL=case-study.module.js.map