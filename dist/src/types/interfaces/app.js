"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminPageResponseObj = exports.clientPageResponseObj = exports.pageSectionDetails = void 0;
const app_1 = require("../enums/app");
exports.pageSectionDetails = {
    sectionId: true,
    sectionHeading1: true,
    sectionHeading2: true,
    sectionSynopsis: true,
    sectionCtaText: true,
    sectionCtaUrl: true,
    sectionImage: true,
    sectionHierarchy: true,
    sectionType: true,
    sectionContents: {
        select: {
            contentId: true,
            contentHeading: true,
            contentSynopsis: true,
            contentCtaText: true,
            contentCtaUrl: true,
            contentImage: true,
            contentIcon: true,
            contentLogo: true,
        },
    },
};
exports.clientPageResponseObj = {
    pageId: true,
    slug: true,
    title: true,
    status: true,
    template: {
        select: {
            name: true,
            sectionCount: true,
            heroSection: {
                select: {
                    contentId: true,
                    contentHeading: true,
                    contentSynopsis: true,
                    contentCtaText: true,
                    contentCtaUrl: true,
                    contentImage: true,
                    contentIcon: true,
                    contentLogo: true,
                },
            },
            sections: {
                select: exports.pageSectionDetails,
            },
        },
    },
};
exports.adminPageResponseObj = {
    pageId: true,
    slug: true,
    title: true,
    status: true,
    pageHits: true,
    publishedAt: true,
    updatedAt: true,
    author: {
        select: {
            uid: true,
            email: true,
            firstName: true,
            lastName: true,
        },
    },
    template: {
        select: {
            name: true,
            sectionCount: true,
            heroSection: {
                select: {
                    contentId: true,
                    contentHeading: true,
                    contentSynopsis: true,
                    contentCtaText: true,
                    contentCtaUrl: true,
                    contentImage: true,
                    contentIcon: true,
                    contentLogo: true,
                },
            },
            sections: {
                select: exports.pageSectionDetails,
            },
        },
    },
};
//# sourceMappingURL=app.js.map