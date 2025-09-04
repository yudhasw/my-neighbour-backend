import { CreateFamilyApprovalManageDto } from '../../../../dtos/requests/create/create-family-approval-manage.dto';
import { UpdateFamilyApprovalManageDto } from '../../../../dtos/requests/update/update-family-approval-manage.dto';
export declare class FamilyApprovalManageService {
    create(createFamilyApprovalManageDto: CreateFamilyApprovalManageDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateFamilyApprovalManageDto: UpdateFamilyApprovalManageDto): string;
    remove(id: number): string;
}
