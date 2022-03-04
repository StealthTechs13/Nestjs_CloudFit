/// <reference types="multer" />
import PrismaService from '@services/prisma';
import { AddCareer, EditCareer, FilterByLocation, FilterByStatus, FilterByType, FilterByDate, DeleteManyCareers, apply } from './dto';
export declare class CareerService {
    private prisma;
    constructor(prisma: PrismaService);
    addCareer(data: AddCareer): Promise<{
        status: string;
        message: string;
    }>;
    editCareer(data: EditCareer, params: any): Promise<{
        status: string;
        message: string;
    }>;
    deleteCareer(params: any): Promise<{
        status: string;
        message: string;
    }>;
    deleteManyCareer(data: DeleteManyCareers): Promise<{
        status: string;
        message: string;
    }>;
    getAllCareers(query: any): Promise<{
        status: string;
        message: {
            allCareers: import(".prisma/client").Career[];
            currentOffset: number;
            count: number;
        };
    }>;
    getCareerDetails(params: any): Promise<{
        status: string;
        message: import(".prisma/client").Career;
    }>;
    filterByLocation(data: FilterByLocation, query: any): Promise<{
        status: string;
        message: {
            allCareers: import(".prisma/client").Career[];
            currentOffset: number;
        };
    }>;
    filterByStatus(data: FilterByStatus, query: any): Promise<{
        status: string;
        message: {
            allCareers: import(".prisma/client").Career[];
            currentOffset: number;
        };
    }>;
    filterByType(data: FilterByType, query: any): Promise<{
        status: string;
        message: {
            allCareers: import(".prisma/client").Career[];
            currentOffset: number;
        };
    }>;
    filterByDate(data: FilterByDate, query: any): Promise<{
        status: string;
        message: {
            allCareers: import(".prisma/client").Career[];
            currentOffset: number;
        };
    }>;
    apply(data: apply, cv: Express.Multer.File, params: any): Promise<{
        status: string;
        message: string;
    }>;
    getAllCareerApplicants(query: any): Promise<{
        status: string;
        message: {
            allCareers: import(".prisma/client").CareerApplicant[];
            currentOffset: number;
            count: number;
        };
    }>;
    getAllCareerApplicantsByCareer(query: any, params: any): Promise<{
        status: string;
        message: {
            allApplicants: import(".prisma/client").CareerApplicant[];
            currentOffset: number;
            count: number;
        };
    }>;
    getByCategory(query: any): Promise<{
        status: string;
        message: {
            allCareers: import(".prisma/client").Career[];
            currentOffset: number;
        };
    }>;
}
