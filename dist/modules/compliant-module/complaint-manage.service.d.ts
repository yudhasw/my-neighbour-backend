import { CreateComplaintManageDto } from '../../dtos/requests/create/create-complaint-manage.dto';
import { UpdateComplaintManageDto } from '../../dtos/requests/update/update-complaint-manage.dto';
export declare class ComplaintManageService {
    create(createRequest: CreateComplaintManageDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateRequest: UpdateComplaintManageDto): string;
    remove(id: string): string;
}
