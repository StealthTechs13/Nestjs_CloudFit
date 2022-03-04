"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPath = exports.setDeleteDate = exports.deleteFlagedPages = exports.getCurrentFormartedDate = void 0;
const tslib_1 = require("tslib");
const client_1 = require("@prisma/client");
const prisma_1 = (0, tslib_1.__importDefault)(require("../services/prisma"));
const getCurrentFormartedDate = () => {
    const dateData = new Date();
    const year = dateData.getFullYear();
    const month = dateData.getMonth();
    const day = dateData.getDate();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const formattedDate = `${months[month]} ${day}, ${year}`;
    return formattedDate;
};
exports.getCurrentFormartedDate = getCurrentFormartedDate;
const deleteFlagedPages = async () => {
    try {
        const deleteDate = new Date().getTime();
        const prisma = new prisma_1.default();
        const deleteCount = await prisma.page.deleteMany({
            where: {
                status: client_1.PAGE_STATUS.DELETED,
                deleteDate: {
                    lte: deleteDate,
                }
            }
        });
        return deleteCount.count;
    }
    catch (error) {
        console.log(error);
        return 0;
    }
};
exports.deleteFlagedPages = deleteFlagedPages;
const setDeleteDate = () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 30);
    return futureDate.getTime();
};
exports.setDeleteDate = setDeleteDate;
const getPath = () => {
    const end = __dirname.indexOf('/src');
    const path = __dirname.substring(0, end);
    return `${path}/modules/mail/templates`;
};
exports.getPath = getPath;
//# sourceMappingURL=helper.functions.js.map