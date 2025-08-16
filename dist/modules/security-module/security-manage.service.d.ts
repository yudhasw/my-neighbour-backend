import { CreateSecurityManageDto } from '../../dtos/requests/create/create-security-manage.dto';
import { UpdateSecurityManageDto } from '../../dtos/requests/update/update-security-manage.dto';
export declare class SecurityManageService {
    create(createRequest: CreateSecurityManageDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateRequest: UpdateSecurityManageDto): string;
    remove(id: string): string;
}
