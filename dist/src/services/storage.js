"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const app_1 = require("../utils/app");
const aws_sdk_1 = require("aws-sdk");
const nest_aws_sdk_1 = require("nest-aws-sdk");
let StorageService = class StorageService {
    storage;
    constructor(storage) {
        this.storage = storage;
    }
    async newUserProfileAttachment(user, file) {
        const [filename, ext] = (0, app_1.parseFilenameAndExtension)(file);
        return await this.storage
            .upload({
            Bucket: process.env.USER_PROFILE_IMAGE_ATTACHMENT_BUCKET,
            Key: `${user}/${Date.now()}-${filename}.${ext}`,
            Body: file.buffer,
            ACL: 'public-read',
            ContentType: file.mimetype,
            ContentDisposition: 'inline',
        })
            .promise();
    }
};
StorageService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__param)(0, (0, nest_aws_sdk_1.InjectAwsService)(aws_sdk_1.S3)),
    (0, tslib_1.__metadata)("design:paramtypes", [aws_sdk_1.S3])
], StorageService);
exports.default = StorageService;
//# sourceMappingURL=storage.js.map