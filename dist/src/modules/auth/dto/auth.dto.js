"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordResetDto = exports.EmailDto = exports.LoginDto = exports.CreateAdminDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const validators_1 = require("../../../utils/decorators/validators");
const mapped_types_1 = require("@nestjs/mapped-types");
class CreateAdminDto {
    name;
    email;
    password;
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)({ message: 'Please provide a valid name' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Name field cannot be empty' }),
    (0, tslib_1.__metadata)("design:type", String)
], CreateAdminDto.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsEmail)({}, { message: 'Please provide a valid email' }),
    (0, tslib_1.__metadata)("design:type", String)
], CreateAdminDto.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8),
    (0, class_validator_1.MaxLength)(20),
    (0, class_validator_1.Matches)(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password too weak',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CreateAdminDto.prototype, "password", void 0);
exports.CreateAdminDto = CreateAdminDto;
class LoginDto {
    email;
    password;
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)({}, { message: 'Please provide a valid email' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, tslib_1.__metadata)("design:type", String)
], LoginDto.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8),
    (0, class_validator_1.MaxLength)(20),
    (0, tslib_1.__metadata)("design:type", String)
], LoginDto.prototype, "password", void 0);
exports.LoginDto = LoginDto;
class EmailDto extends (0, mapped_types_1.PickType)(LoginDto, ['email']) {
}
exports.EmailDto = EmailDto;
class PasswordResetDto {
    password;
    passwordConfirm;
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8),
    (0, class_validator_1.MaxLength)(20),
    (0, class_validator_1.Matches)(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password too weak',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PasswordResetDto.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8),
    (0, class_validator_1.MaxLength)(20),
    (0, validators_1.Match)('password', { message: 'Password not match' }),
    (0, tslib_1.__metadata)("design:type", String)
], PasswordResetDto.prototype, "passwordConfirm", void 0);
exports.PasswordResetDto = PasswordResetDto;
//# sourceMappingURL=auth.dto.js.map