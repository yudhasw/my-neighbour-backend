import { UnitManageService } from './unit-manage.service';
import { CreateUnitManageDto } from '../../dtos/requests/create/create-unit-manage.dto';
import { UpdateUnitManageDto } from '../../dtos/requests/update/update-unit-manage.dto';
export declare class UnitManageController {
    private readonly unitManageService;
    constructor(unitManageService: UnitManageService);
    create(createUnitManageDto: CreateUnitManageDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUnitManageDto: UpdateUnitManageDto): string;
    remove(id: string): string;
}
