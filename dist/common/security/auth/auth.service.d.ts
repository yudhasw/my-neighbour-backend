import { RegistRequest } from 'src/dtos/requests/regist-request';
import { SignInRequest } from 'src/dtos/requests/sign-in-request';
export declare class AuthService {
    registration(registRequest: RegistRequest, files?: Express.Multer.File[]): Promise<{
        registRequest: RegistRequest;
        files: Express.Multer.File[] | undefined;
    }>;
    signIn(signInRequest: SignInRequest): Promise<SignInRequest>;
    jwtGenerate(): Promise<void>;
    jwtCompare(): Promise<void>;
    approvalSystem(): Promise<void>;
}
