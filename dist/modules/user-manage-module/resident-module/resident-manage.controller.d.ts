import { ResidentManageService } from './resident-manage.service';
import { CreateResidentManageDto } from '../../../dtos/requests/create/create-resident-manage.dto';
import { UpdateResidentManageDto } from '../../../dtos/requests/update/update-resident-manage.dto';
export declare class ResidentManageController {
    private readonly residentManageService;
    constructor(residentManageService: ResidentManageService);
    create(createResidentManageDto: CreateResidentManageDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateResidentManageDto: UpdateResidentManageDto): string;
    remove(id: string): string;
}
