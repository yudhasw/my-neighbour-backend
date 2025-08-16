import { CreateBillingManageDto } from '../../../dtos/requests/create/create-billing-manage.dto';
import { UpdateBillingManageDto } from '../../../dtos/requests/update/update-billing-manage.dto';
export declare class BillingManageService {
    create(createRequest: CreateBillingManageDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateRequest: UpdateBillingManageDto): string;
    remove(id: string): string;
}
