import { CreateFamilyCodeManageDto } from '../../../../dtos/requests/create/create-family-code-manage.dto';
import { UpdateFamilyCodeManageDto } from '../../../../dtos/requests/update/update-family-code-manage.dto';
export declare class FamilyCodeManageService {
    create(createFamilyCodeManageDto: CreateFamilyCodeManageDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateFamilyCodeManageDto: UpdateFamilyCodeManageDto): string;
    remove(id: number): string;
}
