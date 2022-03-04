import { HttpStatus } from '@nestjs/common';
import PrismaService from '../../services/prisma';
import { CreateCaseStudyDto, UpdateCaseStudyDto } from './dto';
export declare class CaseStudyService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createCaseStudyDto: CreateCaseStudyDto, galleryId: number): Promise<{
        status: string;
        message: {
            data: import(".prisma/client").CaseStudy;
        };
    }>;
    findAll(limit: number, page: number, sort: string): Promise<{
        case_study: (import(".prisma/client").CaseStudy & {
            createdBy: {
                firstName: string;
                lastName: string;
            };
        })[];
        totalPages: number;
        currentPage: number;
        sort: string;
    }>;
    search(query: any): Promise<any>;
    increaseViews(insight_id: number): Promise<boolean>;
    findOne(id: number): Promise<{
        status: string;
        message: {
            data: import(".prisma/client").CaseStudy & {
                createdBy: {
                    firstName: string;
                    lastName: string;
                };
            };
        };
    }>;
    update(id: number, payload: UpdateCaseStudyDto): Promise<{
        status: string;
        message: string;
        data: import(".prisma/client").CaseStudy;
    }>;
    toggleStatus(id: number, publishedStatus: number): Promise<{
        status: string;
        message: string;
        statusCode: HttpStatus;
    }>;
    remove(id: number): Promise<{
        status: string;
        message: string;
    }>;
    removeMany(ids: Array<number>): Promise<{
        status: string;
        message: string;
    }>;
    exportAllCaseStudies(): Promise<import(".prisma/client").Insight[]>;
    exportByPublishedStatus(publishedStatus: number): Promise<import(".prisma/client").CaseStudy[]>;
    exportByTitle(title: string): Promise<import(".prisma/client").CaseStudy[]>;
    exportPublishedOn(date_published: Date): Promise<import(".prisma/client").Insight[]>;
}
