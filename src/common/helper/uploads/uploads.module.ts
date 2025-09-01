import { Global, Module } from '@nestjs/common';
import { UploadsService } from './uploads.service';
import { MulterModule } from '@nestjs/platform-express';
import { UploadsConfiguration } from './uploads-configuration';
import { GeneralHelper } from '../generalHelper';

@Global()
@Module({
  imports: [MulterModule.register(UploadsConfiguration.createConfig())],
  providers: [UploadsService, GeneralHelper],
  exports: [UploadsService, GeneralHelper, MulterModule],
})
export class UploadFilesModule {}
