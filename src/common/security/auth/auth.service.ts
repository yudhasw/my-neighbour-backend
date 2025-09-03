/* eslint-disable @typescript-eslint/await-thenable */
import { Injectable } from '@nestjs/common';
import { RegistRequest } from 'src/dtos/requests/regist-request';
import { SignInRequest } from 'src/dtos/requests/sign-in-request';

@Injectable()
export class AuthService {
  async registration(
    registRequest: RegistRequest,
    files?: Express.Multer.File[],
  ) {
    return await {
      registRequest,
      files,
    };
  }

  async signIn(signInRequest: SignInRequest) {
    return await signInRequest;
  }

  async jwtGenerate() {}

  async jwtCompare() {}

  async approvalSystem() {}
}
