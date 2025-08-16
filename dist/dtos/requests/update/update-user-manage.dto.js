"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserManageDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_manage_dto_1 = require("../create/create-user-manage.dto");
class UpdateUserManageDto extends (0, mapped_types_1.PartialType)(create_user_manage_dto_1.CreateUserManageDto) {
}
exports.UpdateUserManageDto = UpdateUserManageDto;
//# sourceMappingURL=update-user-manage.dto.js.map