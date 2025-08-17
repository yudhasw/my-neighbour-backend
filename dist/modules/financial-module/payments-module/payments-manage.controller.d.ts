import { PaymentsManageService } from '../payments-module/payments-manage.service';
import { CreatePaymentsManageDto } from '../../../dtos/requests/create/create-payments-manage.dto';
import { UpdatePaymentsManageDto } from '../../../dtos/requests/update/update-payments-manage.dto';
export declare class PaymentsManageController {
    private readonly paymentsManageService;
    constructor(paymentsManageService: PaymentsManageService);
    create(createPaymentsManageDto: CreatePaymentsManageDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePaymentsManageDto: UpdatePaymentsManageDto): string;
    remove(id: string): string;
}
