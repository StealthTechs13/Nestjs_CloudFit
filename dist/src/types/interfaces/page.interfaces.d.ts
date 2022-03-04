import { PAGE_TEMPLATE, SECTION_TYPE, PAGE_STATUS } from '.prisma/client';
export interface ContentInterface {
    pageId?: string;
    contentId: string;
    contentHeading?: string;
    contentSynopsis?: string;
    contentImage?: string;
    contentCtaText?: string;
    contentCtaUrl?: string;
    contentLogo?: string;
    contentIcon?: string;
    contentType?: string;
}
export interface sectionInterface {
    sectionHeading1?: string;
    sectionHeading2?: string;
    sectionSynopsis?: string;
    sectionImage?: string;
    sectionCtaText?: string;
    sectionCtaUrl?: string;
    sectionType: SECTION_TYPE;
    sectionHierarchy: number;
    sectionContents?: ContentInterface;
}
export interface heroSectionInterface {
    heroHeading: string;
    heroSynopsis: string;
    heroImage: string;
    heroCtaText?: string;
    heroCtaUrl?: string;
}
export interface PageInterface {
    pageTitle: string;
    status: PAGE_STATUS;
    templateName: PAGE_TEMPLATE;
    templateHeroSection: heroSectionInterface;
    templateSections: sectionInterface[];
    menuId: number;
}
export interface UpdateSectionInterface {
    pageId: string;
    sectionId: string;
    sectionHeading1: string;
    sectionHeading2: string;
    sectionSynopsis: string;
    sectionCtaText: string;
    sectionCtaUrl: string;
    sectionImage: string;
    sectionHierarchy: number;
    sectionType: SECTION_TYPE;
}
