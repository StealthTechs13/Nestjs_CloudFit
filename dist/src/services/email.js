"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = require("fs");
const path_1 = require("path");
const email_templates_1 = require("../constants/email-templates");
const common_1 = require("@nestjs/common");
const aws_sdk_1 = require("aws-sdk");
const nest_aws_sdk_1 = require("nest-aws-sdk");
let EmailService = class EmailService {
    ses;
    constructor(ses) {
        this.ses = ses;
    }
    async sendMail(ToAddresses, Template, TemplateData) {
        try {
            await this.send(Template, ToAddresses, JSON.parse(TemplateData));
        }
        catch (e) {
            throw new common_1.InternalServerErrorException(e.message);
        }
    }
    async send(templateName, emails, data) {
        const { body, subject } = await this.getTemplate(templateName);
        const params = {
            Source: process.env.MAIL_FROM,
            Destination: {
                ToAddresses: emails,
            },
            ReplyToAddresses: [process.env.MAIL_FROM],
            Message: {
                Body: {
                    Html: {
                        Charset: 'UTF-8',
                        Data: this.replaceTemplateValue(body, data),
                    },
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: subject,
                },
            },
        };
        await this.ses.sendEmail(params).promise();
    }
    async getTemplate(name) {
        let template;
        const getTemplateBody = (filename) => new Promise((res, rej) => {
            const filePath = (0, path_1.join)(__dirname, `../../templates/${filename}.html`);
            (0, fs_1.readFile)(filePath, (err, data) => {
                if (err)
                    return rej(err);
                res(data.toString());
            });
        });
        switch (name) {
            case email_templates_1.ACCOUNT_VERIFICATION_TEMPLATE_NAME:
                template = {
                    subject: 'Verify You Account',
                    body: await getTemplateBody('account-verification'),
                };
                break;
            case email_templates_1.PASSWORD_RESET_TEMPLATE_NAME:
                template = {
                    subject: 'Cloudfift Admin Password Reset',
                    body: await getTemplateBody('password-reset'),
                };
                break;
            case email_templates_1.UPDATED_MAIL_TEMPLATE:
                template = {
                    subject: 'Updated Agenda',
                    body: await getTemplateBody('updated-mail'),
                };
                break;
            case email_templates_1.ADMIN_ACCOUNT_VERIFICATION_TEMPLATE_NAME:
                template = {
                    subject: 'Timbo Admin Account Verification',
                    body: await getTemplateBody('admin-account-verification'),
                };
                break;
            default:
                throw new common_1.BadRequestException('Template Not Exist');
        }
        return template;
    }
    replaceTemplateValue(template, data) {
        let temp = template;
        for (const key in data) {
            temp = temp.replace(`{{${key}}}`, data[key]);
        }
        return temp;
    }
    async deleteMailTemplate(data) {
        try {
            await this.ses.deleteTemplate(data).promise();
        }
        catch (e) {
            throw new common_1.InternalServerErrorException(e.message);
        }
    }
    async sendAccountVerificationEmail(token, email) {
        const verifyURL = `${process.env.CLIENT_URL}auth/verify-email/${token}`;
        await this.sendMail([email], email_templates_1.ACCOUNT_VERIFICATION_TEMPLATE_NAME, JSON.stringify({ email, verifyURL }));
    }
    async sendAdminAccountVerificationEmail(token, email, password) {
        const verifyURL = `${process.env.CLIENT_URL}auth/verify-email/${token}`;
        await this.sendMail([email], email_templates_1.ADMIN_ACCOUNT_VERIFICATION_TEMPLATE_NAME, JSON.stringify({
            email: email.substring(0, email.indexOf('@')),
            verifyURL,
            password,
        }));
    }
    async sendResetPasswordEmail(data) {
        data.resetUrl = `${process.env.APP_BASE_URL}/auth/reset-password/${data.resetToken}`;
        console.log({ ...data });
        await this.sendMail([data.email], email_templates_1.PASSWORD_RESET_TEMPLATE_NAME, JSON.stringify({ ...data }));
    }
    async sendUpdatedMail(fullname, email, code) {
        await this.sendMail([email], email_templates_1.UPDATED_MAIL_TEMPLATE, JSON.stringify({ fullname, code }));
    }
    async createTemplate(Template) {
        const params = {
            Template,
        };
        await this.ses.createTemplate(params).promise();
    }
};
EmailService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__param)(0, (0, nest_aws_sdk_1.InjectAwsService)(aws_sdk_1.SES)),
    (0, tslib_1.__metadata)("design:paramtypes", [aws_sdk_1.SES])
], EmailService);
exports.default = EmailService;
//# sourceMappingURL=email.js.map