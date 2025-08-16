import { EmployeeManageService } from './employee-manage.service';
import { CreateEmployeeManageDto } from '../../../dtos/requests/create/create-employee-manage.dto';
import { UpdateEmployeeManageDto } from '../../../dtos/requests/update/update-employee-manage.dto';
export declare class EmployeeManageController {
    private readonly employeeManageService;
    constructor(employeeManageService: EmployeeManageService);
    create(createEmployeeManageDto: CreateEmployeeManageDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateEmployeeManageDto: UpdateEmployeeManageDto): string;
    remove(id: string): string;
}
