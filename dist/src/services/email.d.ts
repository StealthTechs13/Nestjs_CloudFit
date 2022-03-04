import { SES } from 'aws-sdk';
declare class EmailService {
    private readonly ses;
    constructor(ses: SES);
    sendMail(ToAddresses: string[], Template: string, TemplateData: string): Promise<void>;
    send(templateName: string, emails: string[], data: Record<string, string>): Promise<void>;
    getTemplate(name: string): Promise<{
        subject: string;
        body: string;
    }>;
    replaceTemplateValue(template: string, data: Record<string, string>): string;
    deleteMailTemplate(data: any): Promise<void>;
    sendAccountVerificationEmail(token: string, email: string): Promise<void>;
    sendAdminAccountVerificationEmail(token: string, email: string, password: string): Promise<void>;
    sendResetPasswordEmail(data: Record<string, any>): Promise<void>;
    sendUpdatedMail(fullname: string, email: string, code: string): Promise<void>;
    createTemplate(Template: {
        TemplateName: string;
        SubjectPart: string;
        HtmlPart: string;
        TextPart: string;
    }): Promise<void>;
}
export default EmailService;
