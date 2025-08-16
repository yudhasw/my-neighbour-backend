import { LeasesManageService } from './leases-manage.service';
import { CreateLeasesManageDto } from '../../../dtos/requests/create/create-leases-manage.dto';
import { UpdateLeasesManageDto } from '../../../dtos/requests/update/update-leases-manage.dto';
export declare class LeasesManageController {
    private readonly leasesManageService;
    constructor(leasesManageService: LeasesManageService);
    create(createLeasesManageDto: CreateLeasesManageDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateLeasesManageDto: UpdateLeasesManageDto): string;
    remove(id: string): string;
}
