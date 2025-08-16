import { ComplaintManageService } from './complaint-manage.service';
import { CreateComplaintManageDto } from '../../dtos/requests/create/create-complaint-manage.dto';
import { UpdateComplaintManageDto } from '../../dtos/requests/update/update-complaint-manage.dto';
export declare class ComplaintManageController {
    private readonly complaintManageService;
    constructor(complaintManageService: ComplaintManageService);
    create(createComplaintManageDto: CreateComplaintManageDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateComplaintManageDto: UpdateComplaintManageDto): string;
    remove(id: string): string;
}
