import { AppUserManageService } from './app-user-manage.service';
import { CreateAppUserManageDto } from '../../../dtos/requests/create/create-app-user-manage.dto';
import { UpdateAppUserManageDto } from '../../../dtos/requests/update/update-app-user-manage.dto';
export declare class AppUserManageController {
    private readonly appUserManageService;
    constructor(appUserManageService: AppUserManageService);
    create(createAppUserManageDto: CreateAppUserManageDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAppUserManageDto: UpdateAppUserManageDto): string;
    remove(id: string): string;
}
