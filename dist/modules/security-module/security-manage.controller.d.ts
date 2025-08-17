import { SecurityManageService } from './security-manage.service';
import { CreateSecurityManageDto } from '../../dtos/requests/create/create-security-manage.dto';
import { UpdateSecurityManageDto } from '../../dtos/requests/update/update-security-manage.dto';
export declare class SecurityManageController {
    private readonly securityManageService;
    constructor(securityManageService: SecurityManageService);
    create(createSecurityManageDto: CreateSecurityManageDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSecurityManageDto: UpdateSecurityManageDto): string;
    remove(id: string): string;
}
