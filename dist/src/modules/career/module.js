"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const prisma_1 = (0, tslib_1.__importDefault)(require("../../services/prisma"));
const controller_1 = require("./controller");
const service_1 = require("./service");
let CareerModule = class CareerModule {
};
CareerModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [controller_1.CareerController],
        providers: [
            service_1.CareerService,
            prisma_1.default
        ],
        exports: [service_1.CareerService]
    })
], CareerModule);
exports.default = CareerModule;
//# sourceMappingURL=module.js.map