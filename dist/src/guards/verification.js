"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const auth_1 = require("../types/enums/auth");
const auth_2 = require("../constants/auth");
let VerificationAccessGuard = class VerificationAccessGuard {
    reflector;
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const status = this.reflector.getAllAndOverride(auth_2.VERIFICATION_KEY, [context.getHandler(), context.getClass()]);
        if (status === null || status === undefined)
            return true;
        const req = context.switchToHttp().getRequest();
        return !!(status === auth_1.VerificationStatus.VERIFIED && req.user.email_verified_at);
    }
};
VerificationAccessGuard = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [core_1.Reflector])
], VerificationAccessGuard);
exports.default = VerificationAccessGuard;
//# sourceMappingURL=verification.js.map