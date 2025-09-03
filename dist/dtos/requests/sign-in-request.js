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
exports.SignInRequest = void 0;
const class_validator_1 = require("class-validator");
class SignInRequest {
    identifier;
    password;
}
exports.SignInRequest = SignInRequest;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Username harus berupa teks' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Username tidak boleh kosong' }),
    (0, class_validator_1.MinLength)(5, { message: 'Username harus lebih dari 5 karakter' }),
    __metadata("design:type", String)
], SignInRequest.prototype, "identifier", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Password harus berupa teks' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Password tidak boleh kosong' }),
    (0, class_validator_1.MinLength)(4, { message: 'Password minimal 4 karakter' }),
    (0, class_validator_1.IsStrongPassword)({
        minLength: 4,
        minLowercase: 1,
        minNumbers: 3,
        minSymbols: 1,
        minUppercase: 1,
    }, {
        message: 'Kata sandi harus minimal 4 karakter, 3 angka, dan 1 simbol.',
    }),
    (0, class_validator_1.MaxLength)(15, {
        message: 'Password maksimal 15 karakter',
    }),
    __metadata("design:type", String)
], SignInRequest.prototype, "password", void 0);
//# sourceMappingURL=sign-in-request.js.map