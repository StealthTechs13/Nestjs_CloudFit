"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const contact_us_module_1 = require("./contact-us/contact-us.module");
const case_study_module_1 = require("./case-study/case-study.module");
const gallery_module_1 = require("./gallery/gallery.module");
const common_1 = require("@nestjs/common");
const auth_module_1 = (0, tslib_1.__importDefault)(require("./auth/auth.module"));
const module_1 = (0, tslib_1.__importDefault)(require("./career/module"));
const module_2 = (0, tslib_1.__importDefault)(require("./clients/module"));
const module_3 = (0, tslib_1.__importDefault)(require("./settings/module"));
const page_module_1 = (0, tslib_1.__importDefault)(require("./page/page.module"));
const module_4 = (0, tslib_1.__importDefault)(require("./menu-category/module"));
const module_5 = (0, tslib_1.__importDefault)(require("./role/module"));
const schedule_1 = require("@nestjs/schedule");
const task_schedule_module_1 = require("./task-schedule/task-schedule.module");
const mailer_1 = require("@nestjs-modules/mailer");
const handlebars_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
const partners_module_1 = require("./partners/partners.module");
const insights_module_1 = require("./insights/insights.module");
const app_module_1 = require("./app/app.module");
const nest_aws_sdk_1 = require("nest-aws-sdk");
const aws_sdk_1 = require("aws-sdk");
const user_module_1 = (0, tslib_1.__importDefault)(require("./user/user.module"));
let Modules = class Modules {
};
Modules = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            auth_module_1.default,
            module_1.default,
            module_2.default,
            module_3.default,
            app_module_1.AppModule,
            user_module_1.default,
            schedule_1.ScheduleModule.forRoot(),
            task_schedule_module_1.TaskScheduleModule,
            page_module_1.default,
            module_5.default,
            gallery_module_1.GalleryModule,
            partners_module_1.PartnersModule,
            module_4.default,
            case_study_module_1.CaseStudyModule,
            insights_module_1.InsightsModule,
            contact_us_module_1.ContactUsModule,
            nest_aws_sdk_1.AwsSdkModule.forRoot({
                defaultServiceOptions: {
                    region: process.env.AWS_DEFAULT_REGION || 'us-east-1',
                    correctClockSkew: true,
                },
                services: [aws_sdk_1.SES, aws_sdk_1.S3],
            }),
            mailer_1.MailerModule.forRoot({
                transport: `smtps://${process.env.SENDER_EMAIL}:${process.env.PASS}@${process.env.HOST}`,
                defaults: {
                    from: `"CloudFift Inc" <${process.env.SENDER_EMAIL}>`,
                },
                template: {
                    dir: __dirname + '/templates',
                    adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                    options: {
                        strict: true,
                    },
                },
            }),
        ],
    })
], Modules);
exports.default = Modules;
//# sourceMappingURL=index.js.map