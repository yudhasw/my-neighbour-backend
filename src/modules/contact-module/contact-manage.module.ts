import { Module } from '@nestjs/common';
import { ContactManageService } from './contact-manage.service';
import { ContactManageController } from './contact-manage.controller';
import { DatabaseModule } from 'src/common/database/database.module';
import { DatabaseService } from 'src/common/database/database.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ContactManageController],
  providers: [ContactManageService, DatabaseService],
  exports: [ContactManageService],
})
export class ContactManageModule {}
