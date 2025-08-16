"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationalReportController = void 0;
const common_1 = require("@nestjs/common");
const operational_report_service_1 = require("./operational-report.service");
let OperationalReportController = class OperationalReportController {
    operationalReportService;
    constructor(operationalReportService) {
        this.operationalReportService = operationalReportService;
    }
};
exports.OperationalReportController = OperationalReportController;
exports.OperationalReportController = OperationalReportController = __decorate([
    (0, common_1.Controller)('operational-report'),
    __metadata("design:paramtypes", [operational_report_service_1.OperationalReportService])
], OperationalReportController);
//# sourceMappingURL=operational-report.controller.js.map