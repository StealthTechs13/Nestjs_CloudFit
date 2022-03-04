"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileUpload = exports.getUserDevice = exports.getRealUserLocation = exports.generateCode = void 0;
const tslib_1 = require("tslib");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const DeviceDetector = require("device-detector-js");
const AWS = (0, tslib_1.__importStar)(require("aws-sdk"));
const AWS_S3_BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME;
const s3 = new AWS.S3();
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});
const generateCode = async (characterLength) => {
    const randomstring = require('randomstring');
    return randomstring.generate(characterLength);
};
exports.generateCode = generateCode;
const getRealUserLocation = async () => {
    const location = await axios_1.default.get('http://ip-api.com/json');
    return location;
};
exports.getRealUserLocation = getRealUserLocation;
const getUserDevice = async () => {
    const deviceDetector = new DeviceDetector();
    const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36';
    const device = deviceDetector.parse(userAgent);
    return device;
};
exports.getUserDevice = getUserDevice;
const fileUpload = async (file) => {
    try {
        const { originalname } = file;
        const params = {
            Bucket: AWS_S3_BUCKET_NAME,
            Key: `${Date.now().toString()}-${originalname}`,
            Body: file.originalname,
            ACL: 'public-read',
            ContentType: file.mimetype,
            ContentDisposition: 'inline',
        };
        try {
            const s3Response = await s3.upload(params).promise();
            return {
                status: 'success',
                message: s3Response.Key,
            };
        }
        catch (e) {
            console.log(e);
            return {
                status: 'failed',
                message: 'Failed',
            };
        }
    }
    catch (error) {
        return {
            status: 'failed',
            message: error,
        };
    }
};
exports.fileUpload = fileUpload;
//# sourceMappingURL=helper.js.map