import {
  Body,
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegistRequest } from '../../../dtos/requests/regist-request';
import { FilesInterceptor } from '@nestjs/platform-express';
import { SignInRequest } from '../../../dtos/requests/sign-in-request';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  @UseInterceptors(FilesInterceptor('files', 3))
  registration(
    @Body() registrationDto: RegistRequest,
    @UploadedFiles() files?: Express.Multer.File[],
  ) {
    return this.authService.registration(registrationDto, files);
  }

  @Post('sign-in')
  signIn(@Body() signInDto: SignInRequest) {
    return this.authService.signIn(signInDto);
  }
}
