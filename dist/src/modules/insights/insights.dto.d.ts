export declare class CreateInsightDto {
    title: string;
    body: string;
    tags: string[];
    slug: string;
    publishedOn: Date;
    publishedStatus: number;
    seoTitle: string;
    galleryId: number;
}
export declare class UpdateInsightDto {
    title: string;
    body: string;
    tags: any;
    slug: string;
    publishedOn: Date;
    publishedStatus: number;
}
export declare class ExportDto {
    title: string;
    publishedStatus: string;
    publishedOn: Date;
    all: string;
}
