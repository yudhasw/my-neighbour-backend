import { CreateLeasesManageDto } from '../../../dtos/requests/create/create-leases-manage.dto';
import { UpdateLeasesManageDto } from '../../../dtos/requests/update/update-leases-manage.dto';
export declare class LeasesManageService {
    create(createRequest: CreateLeasesManageDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateRequest: UpdateLeasesManageDto): string;
    remove(id: string): string;
}
