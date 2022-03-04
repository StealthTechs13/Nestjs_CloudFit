export declare const generateCode: (characterLength: number) => Promise<string>;
export declare const getRealUserLocation: () => Promise<any>;
export declare const getUserDevice: () => Promise<any>;
export declare const fileUpload: (file: {
    originalname: any;
    mimetype?: any;
}) => Promise<any>;
