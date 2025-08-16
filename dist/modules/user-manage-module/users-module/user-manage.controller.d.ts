import { UserManageService } from '../users-module/user-manage.service';
import { CreateUserManageDto } from '../../../dtos/requests/create/create-user-manage.dto';
import { UpdateUserManageDto } from '../../../dtos/requests/update/update-user-manage.dto';
export declare class UserManageController {
    private readonly userManageService;
    constructor(userManageService: UserManageService);
    create(createUserManageDto: CreateUserManageDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUserManageDto: UpdateUserManageDto): string;
    remove(id: string): string;
}
