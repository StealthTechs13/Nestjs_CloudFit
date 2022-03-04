/// <reference types="multer" />
import { S3 } from 'aws-sdk';
declare class StorageService {
    private readonly storage;
    constructor(storage: S3);
    newUserProfileAttachment(user: string, file: Express.Multer.File): Promise<S3.ManagedUpload.SendData>;
}
export default StorageService;
