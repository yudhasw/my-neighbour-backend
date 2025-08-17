import { CreateAppUserManageDto } from '../../../dtos/requests/create/create-app-user-manage.dto';
import { UpdateAppUserManageDto } from '../../../dtos/requests/update/update-app-user-manage.dto';
export declare class AppUserManageService {
    create(createRequest: CreateAppUserManageDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateRequest: UpdateAppUserManageDto): string;
    remove(id: number): string;
}
