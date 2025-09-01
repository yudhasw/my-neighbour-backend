"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadFilesModule = void 0;
const common_1 = require("@nestjs/common");
const uploads_service_1 = require("./uploads.service");
const platform_express_1 = require("@nestjs/platform-express");
const uploads_configuration_1 = require("./uploads-configuration");
const generalHelper_1 = require("../generalHelper");
let UploadFilesModule = class UploadFilesModule {
};
exports.UploadFilesModule = UploadFilesModule;
exports.UploadFilesModule = UploadFilesModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [platform_express_1.MulterModule.register(uploads_configuration_1.UploadsConfiguration.createConfig())],
        providers: [uploads_service_1.UploadsService, generalHelper_1.GeneralHelper],
        exports: [uploads_service_1.UploadsService, generalHelper_1.GeneralHelper, platform_express_1.MulterModule],
    })
], UploadFilesModule);
//# sourceMappingURL=uploads.module.js.map