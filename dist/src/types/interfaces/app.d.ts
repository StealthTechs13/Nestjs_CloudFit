import { APP_STATE } from '@enum/app';
export interface IApp {
    loadState: APP_STATE;
    canLoad(): boolean;
}
export interface ServerResp {
    statusCode: number;
    message: string;
    data?: object;
}
export declare const pageSectionDetails: {
    sectionId: boolean;
    sectionHeading1: boolean;
    sectionHeading2: boolean;
    sectionSynopsis: boolean;
    sectionCtaText: boolean;
    sectionCtaUrl: boolean;
    sectionImage: boolean;
    sectionHierarchy: boolean;
    sectionType: boolean;
    sectionContents: {
        select: {
            contentId: boolean;
            contentHeading: boolean;
            contentSynopsis: boolean;
            contentCtaText: boolean;
            contentCtaUrl: boolean;
            contentImage: boolean;
            contentIcon: boolean;
            contentLogo: boolean;
        };
    };
};
export declare const clientPageResponseObj: {
    pageId: boolean;
    slug: boolean;
    title: boolean;
    status: boolean;
    template: {
        select: {
            name: boolean;
            sectionCount: boolean;
            heroSection: {
                select: {
                    contentId: boolean;
                    contentHeading: boolean;
                    contentSynopsis: boolean;
                    contentCtaText: boolean;
                    contentCtaUrl: boolean;
                    contentImage: boolean;
                    contentIcon: boolean;
                    contentLogo: boolean;
                };
            };
            sections: {
                select: {
                    sectionId: boolean;
                    sectionHeading1: boolean;
                    sectionHeading2: boolean;
                    sectionSynopsis: boolean;
                    sectionCtaText: boolean;
                    sectionCtaUrl: boolean;
                    sectionImage: boolean;
                    sectionHierarchy: boolean;
                    sectionType: boolean;
                    sectionContents: {
                        select: {
                            contentId: boolean;
                            contentHeading: boolean;
                            contentSynopsis: boolean;
                            contentCtaText: boolean;
                            contentCtaUrl: boolean;
                            contentImage: boolean;
                            contentIcon: boolean;
                            contentLogo: boolean;
                        };
                    };
                };
            };
        };
    };
};
export declare const adminPageResponseObj: {
    pageId: boolean;
    slug: boolean;
    title: boolean;
    status: boolean;
    pageHits: boolean;
    publishedAt: boolean;
    updatedAt: boolean;
    author: {
        select: {
            uid: boolean;
            email: boolean;
            firstName: boolean;
            lastName: boolean;
        };
    };
    template: {
        select: {
            name: boolean;
            sectionCount: boolean;
            heroSection: {
                select: {
                    contentId: boolean;
                    contentHeading: boolean;
                    contentSynopsis: boolean;
                    contentCtaText: boolean;
                    contentCtaUrl: boolean;
                    contentImage: boolean;
                    contentIcon: boolean;
                    contentLogo: boolean;
                };
            };
            sections: {
                select: {
                    sectionId: boolean;
                    sectionHeading1: boolean;
                    sectionHeading2: boolean;
                    sectionSynopsis: boolean;
                    sectionCtaText: boolean;
                    sectionCtaUrl: boolean;
                    sectionImage: boolean;
                    sectionHierarchy: boolean;
                    sectionType: boolean;
                    sectionContents: {
                        select: {
                            contentId: boolean;
                            contentHeading: boolean;
                            contentSynopsis: boolean;
                            contentCtaText: boolean;
                            contentCtaUrl: boolean;
                            contentImage: boolean;
                            contentIcon: boolean;
                            contentLogo: boolean;
                        };
                    };
                };
            };
        };
    };
};
