export declare class AddCareer {
    title: string;
    type: string;
    country: string;
    city: string;
    description: string;
    requirements: string;
    responsibilities: string;
    benefits: string;
    seoTitle: string;
    slug: string;
    metaDescription: string;
    status: any;
    category: string;
}
export declare class EditCareer {
    title: string;
    type: string;
    country: string;
    city: string;
    description: string;
    requirements: string;
    responsibilities: string;
    benefits: string;
    seoTitle: string;
    slug: string;
    metaDescription: string;
    status: any;
    category: string;
}
export declare class DeleteManyCareers {
    careerIds: [];
}
export declare class GetAllCareers {
    page: number;
    number: number;
}
export declare class FilterByLocation {
    page: number;
    number: number;
    country: string;
}
export declare class FilterByStatus {
    page: number;
    number: number;
    status: number;
}
export declare class FilterByType {
    page: number;
    number: number;
    type: string;
}
export declare class FilterByDate {
    page: number;
    number: number;
    fromDate: string;
    toDate: string;
}
export declare class apply {
    fullName: string;
    phoneNumber: string;
    email: string;
    message: string;
}
