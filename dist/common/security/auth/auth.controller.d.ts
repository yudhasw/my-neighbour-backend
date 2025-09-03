import { AuthService } from './auth.service';
import { RegistRequest } from '../../../dtos/requests/regist-request';
import { SignInRequest } from '../../../dtos/requests/sign-in-request';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    registration(registrationDto: RegistRequest, files?: Express.Multer.File[]): Promise<{
        registRequest: RegistRequest;
        files: Express.Multer.File[] | undefined;
    }>;
    signIn(signInDto: SignInRequest): Promise<SignInRequest>;
}
