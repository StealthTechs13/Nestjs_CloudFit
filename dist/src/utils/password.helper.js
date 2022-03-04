"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmPassword = exports.hashPassword = void 0;
const tslib_1 = require("tslib");
const bcryptjs_1 = (0, tslib_1.__importDefault)(require("bcryptjs"));
const hashPassword = async (password) => {
    try {
        const saltRounds = await bcryptjs_1.default.genSalt(10);
        return await bcryptjs_1.default.hash(password, saltRounds);
    }
    catch (error) {
        console.log(error.toString());
    }
};
exports.hashPassword = hashPassword;
const confirmPassword = async (password, hashedPass) => {
    return await bcryptjs_1.default.compare(password, hashedPass);
};
exports.confirmPassword = confirmPassword;
//# sourceMappingURL=password.helper.js.map