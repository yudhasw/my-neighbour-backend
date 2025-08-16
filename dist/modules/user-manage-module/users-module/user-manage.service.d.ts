import { CreateUserManageDto } from '../../../dtos/requests/create/create-user-manage.dto';
import { UpdateUserManageDto } from '../../../dtos/requests/update/update-user-manage.dto';
export declare class UserManageService {
    create(createRequest: CreateUserManageDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateRequest: UpdateUserManageDto): string;
    remove(id: string): string;
}
