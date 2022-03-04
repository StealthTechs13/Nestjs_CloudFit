"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactUsModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const contact_us_service_1 = require("./contact-us.service");
const contact_us_controller_1 = require("./contact-us.controller");
const prisma_1 = (0, tslib_1.__importDefault)(require("../../services/prisma"));
let ContactUsModule = class ContactUsModule {
};
ContactUsModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [contact_us_controller_1.ContactUsController],
        providers: [contact_us_service_1.ContactUsService, prisma_1.default],
    })
], ContactUsModule);
exports.ContactUsModule = ContactUsModule;
//# sourceMappingURL=contact-us.module.js.map