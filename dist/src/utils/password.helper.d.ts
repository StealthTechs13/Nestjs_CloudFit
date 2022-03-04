export declare const hashPassword: (password: string) => Promise<string>;
export declare const confirmPassword: (password: string, hashedPass: string) => Promise<boolean>;
