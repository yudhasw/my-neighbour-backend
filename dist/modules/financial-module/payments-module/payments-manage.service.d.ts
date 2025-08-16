import { CreatePaymentsManageDto } from '../../../dtos/requests/create/create-payments-manage.dto';
import { UpdatePaymentsManageDto } from '../../../dtos/requests/update/update-payments-manage.dto';
export declare class PaymentsManageService {
    create(createRequest: CreatePaymentsManageDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateRequest: UpdatePaymentsManageDto): string;
    remove(id: string): string;
}
