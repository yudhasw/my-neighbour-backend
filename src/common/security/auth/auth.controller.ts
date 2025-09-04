import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Request,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegistRequest } from '../../../dtos/requests/regist-request';
import { FilesInterceptor } from '@nestjs/platform-express';
import { SignInRequest } from '../../../dtos/requests/sign-in-request';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Request as expressRequest } from 'express';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  @UseInterceptors(
    FilesInterceptor('files', 5, {
      limits: { fileSize: 10 * 1024 * 1024 },
      fileFilter: (req, file, callback) => {
        if (file.mimetype.match(/\/(jpg|jpeg|png|pdf)$/)) {
          callback(null, true);
        } else {
          callback(new Error('Unsupported file type'), false);
        }
      },
    }),
  )
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

  @Get('verify-email')
  verifyEmail(@Query('token') token: string) {
    return this.authService.verifyEmail(token);
  }

  @UseGuards(JwtAuthGuard)
  @Post('refresh')
  refreshToken(@Request() req: expressRequest & { user: any }) {
    return this.authService.generateTokens(req.user.sub);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req: expressRequest & { user: any }) {
    const userId = req.user.sub;

    return {
      message: 'Profile retrieved successfully',
      userId: userId,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Patch('family-approval/:approvalId')
  approveFamily(
    @Param('approvalId') approvalId: string,
    @Request() req: expressRequest & { user: any },
    @Body() approvalData: { action: 'APPROVE' | 'REJECT'; notes?: string },
  ) {
    return this.authService.approvalSystem({
      familyApprovalId: approvalId,
      headOfHouseholdId: req.user.resident?.id,
      ...approvalData,
    });
  }
}
