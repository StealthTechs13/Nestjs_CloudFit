"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require(".prisma/client");
const password_helper_1 = require("../src/utils/password.helper");
const prisma = new client_1.PrismaClient();
const main = async () => {
    const password = await (0, password_helper_1.hashPassword)('cloudFift-.');
    const superRole = await prisma.roles.create({
        data: {
            title: 'ADMIN',
            permissions: [client_1.PERMISSIONS.FULL_ACCESS],
        },
    });
    await prisma.admin.create({
        data: {
            firstName: 'CloudFift',
            lastName: 'Incoperations',
            email: 'admin@cloudfift.com',
            role: client_1.USER_ROLES.ADMIN,
            isActivated: 1,
            password: password,
            adminRole: { connect: { uid: superRole.uid } },
        },
    });
    await prisma.websiteSettings.create({
        data: {
            logo: 'logo.png',
            favicon: 'favicon.ico',
            banner: 'banner.png',
            Author: '',
            metaDescription: '',
            keywords: '',
            privacyPolicy: '',
            termsAndConditions: '',
            legal: '',
        },
    });
    await prisma.menuCategory.createMany({
        data: [
            {
                id: 1,
                name: 'Who We Are',
                slug: 'who-we-are',
                status: 'PUBLISHED',
            },
            {
                id: 2,
                name: 'Who We Do',
                slug: 'who-we-do',
                status: 'PUBLISHED',
            },
            {
                id: 3,
                name: 'Industries and expertise',
                slug: 'industries-and-expertise',
                status: 'PUBLISHED',
            },
            {
                id: 4,
                name: 'Public Services',
                slug: 'public-services',
                status: 'PUBLISHED',
            },
        ],
    });
};
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map