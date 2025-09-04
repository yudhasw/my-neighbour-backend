import { FamilyCodeManageService } from './family-code-manage.service';
import { CreateFamilyCodeManageDto } from '../../../../dtos/requests/create/create-family-code-manage.dto';
import { UpdateFamilyCodeManageDto } from '../../../../dtos/requests/update/update-family-code-manage.dto';
export declare class FamilyCodeManageController {
    private readonly familyCodeManageService;
    constructor(familyCodeManageService: FamilyCodeManageService);
    create(createFamilyCodeManageDto: CreateFamilyCodeManageDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateFamilyCodeManageDto: UpdateFamilyCodeManageDto): string;
    remove(id: string): string;
}
