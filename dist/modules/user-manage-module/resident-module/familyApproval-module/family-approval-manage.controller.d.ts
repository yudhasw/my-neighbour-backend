import { FamilyApprovalManageService } from './family-approval-manage.service';
import { CreateFamilyApprovalManageDto } from '../../../../dtos/requests/create/create-family-approval-manage.dto';
import { UpdateFamilyApprovalManageDto } from '../../../../dtos/requests/update/update-family-approval-manage.dto';
export declare class FamilyApprovalManageController {
    private readonly familyApprovalManageService;
    constructor(familyApprovalManageService: FamilyApprovalManageService);
    create(createFamilyApprovalManageDto: CreateFamilyApprovalManageDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateFamilyApprovalManageDto: UpdateFamilyApprovalManageDto): string;
    remove(id: string): string;
}
