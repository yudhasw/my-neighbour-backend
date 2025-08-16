import { BillingManageService } from './billing-manage.service';
import { CreateBillingManageDto } from '../../../dtos/requests/create/create-billing-manage.dto';
import { UpdateBillingManageDto } from '../../../dtos/requests/update/update-billing-manage.dto';
export declare class BillingManageController {
    private readonly billingManageService;
    constructor(billingManageService: BillingManageService);
    create(createBillingManageDto: CreateBillingManageDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBillingManageDto: UpdateBillingManageDto): string;
    remove(id: string): string;
}
