"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apply = exports.FilterByDate = exports.FilterByType = exports.FilterByStatus = exports.FilterByLocation = exports.GetAllCareers = exports.DeleteManyCareers = exports.EditCareer = exports.AddCareer = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class AddCareer {
    title;
    type;
    country;
    city;
    description;
    requirements;
    responsibilities;
    benefits;
    seoTitle;
    slug;
    metaDescription;
    status;
    category;
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)({ message: 'Job Title cannot be empty' }),
    (0, class_validator_1.IsString)({ message: 'Title must be a string' }),
    (0, tslib_1.__metadata)("design:type", String)
], AddCareer.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)({ message: 'Type cannot be empty' }),
    (0, class_validator_1.IsString)({ message: 'Type must be string' }),
    (0, tslib_1.__metadata)("design:type", String)
], AddCareer.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)({ message: 'Country cannot be empty' }),
    (0, class_validator_1.IsString)({ message: 'Country must be string' }),
    (0, tslib_1.__metadata)("design:type", String)
], AddCareer.prototype, "country", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)({ message: 'City cannot be empty' }),
    (0, class_validator_1.IsString)({ message: 'City must be string' }),
    (0, tslib_1.__metadata)("design:type", String)
], AddCareer.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)({ message: 'Description cannot be empty' }),
    (0, class_validator_1.IsString)({ message: 'Description must be string' }),
    (0, tslib_1.__metadata)("design:type", String)
], AddCareer.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)({ message: 'Requirements cannot be empty' }),
    (0, class_validator_1.IsString)({ message: 'Requirements must be string' }),
    (0, tslib_1.__metadata)("design:type", String)
], AddCareer.prototype, "requirements", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)({ message: 'Responsibilities cannot be empty' }),
    (0, class_validator_1.IsString)({ message: 'Responsibilities must be string' }),
    (0, tslib_1.__metadata)("design:type", String)
], AddCareer.prototype, "responsibilities", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)({ message: 'Benefits cannot be empty' }),
    (0, class_validator_1.IsString)({ message: 'Benefits must be string' }),
    (0, tslib_1.__metadata)("design:type", String)
], AddCareer.prototype, "benefits", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)({ message: "Career Visibility cannot be empty" }),
    (0, tslib_1.__metadata)("design:type", Object)
], AddCareer.prototype, "status", void 0);
exports.AddCareer = AddCareer;
class EditCareer {
    title;
    type;
    country;
    city;
    description;
    requirements;
    responsibilities;
    benefits;
    seoTitle;
    slug;
    metaDescription;
    status;
    category;
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)({ message: 'Job Title cannot be empty' }),
    (0, class_validator_1.IsString)({ message: 'Title must be a string' }),
    (0, tslib_1.__metadata)("design:type", String)
], EditCareer.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)({ message: 'Type cannot be empty' }),
    (0, class_validator_1.IsString)({ message: 'Type must be string' }),
    (0, tslib_1.__metadata)("design:type", String)
], EditCareer.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)({ message: 'Country cannot be empty' }),
    (0, class_validator_1.IsString)({ message: 'Country must be string' }),
    (0, tslib_1.__metadata)("design:type", String)
], EditCareer.prototype, "country", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)({ message: 'City cannot be empty' }),
    (0, class_validator_1.IsString)({ message: 'City must be string' }),
    (0, tslib_1.__metadata)("design:type", String)
], EditCareer.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)({ message: 'Description cannot be empty' }),
    (0, class_validator_1.IsString)({ message: 'Description must be string' }),
    (0, tslib_1.__metadata)("design:type", String)
], EditCareer.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)({ message: 'Requirements cannot be empty' }),
    (0, class_validator_1.IsString)({ message: 'Requirements must be string' }),
    (0, tslib_1.__metadata)("design:type", String)
], EditCareer.prototype, "requirements", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)({ message: 'Responsibilities cannot be empty' }),
    (0, class_validator_1.IsString)({ message: 'Responsibilities must be string' }),
    (0, tslib_1.__metadata)("design:type", String)
], EditCareer.prototype, "responsibilities", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)({ message: 'Benefits cannot be empty' }),
    (0, class_validator_1.IsString)({ message: 'Benefits must be string' }),
    (0, tslib_1.__metadata)("design:type", String)
], EditCareer.prototype, "benefits", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)({ message: "Career Visibility cannot be empty" }),
    (0, tslib_1.__metadata)("design:type", Object)
], EditCareer.prototype, "status", void 0);
exports.EditCareer = EditCareer;
class DeleteManyCareers {
    careerIds;
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)({ message: 'Pass All IDs of careers to be deleted' }),
    (0, tslib_1.__metadata)("design:type", Array)
], DeleteManyCareers.prototype, "careerIds", void 0);
exports.DeleteManyCareers = DeleteManyCareers;
class GetAllCareers {
    page;
    number;
}
exports.GetAllCareers = GetAllCareers;
class FilterByLocation {
    page;
    number;
    country;
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)({ message: "Country cannot be empty" }),
    (0, tslib_1.__metadata)("design:type", String)
], FilterByLocation.prototype, "country", void 0);
exports.FilterByLocation = FilterByLocation;
class FilterByStatus {
    page;
    number;
    status;
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)({ message: "Status cannot be empty" }),
    (0, tslib_1.__metadata)("design:type", Number)
], FilterByStatus.prototype, "status", void 0);
exports.FilterByStatus = FilterByStatus;
class FilterByType {
    page;
    number;
    type;
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)({ message: "Type cannot be empty" }),
    (0, tslib_1.__metadata)("design:type", String)
], FilterByType.prototype, "type", void 0);
exports.FilterByType = FilterByType;
class FilterByDate {
    page;
    number;
    fromDate;
    toDate;
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)({ message: "From Date cannot be empty" }),
    (0, tslib_1.__metadata)("design:type", String)
], FilterByDate.prototype, "fromDate", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)({ message: "To Date cannot be empty" }),
    (0, tslib_1.__metadata)("design:type", String)
], FilterByDate.prototype, "toDate", void 0);
exports.FilterByDate = FilterByDate;
class apply {
    fullName;
    phoneNumber;
    email;
    message;
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)({ message: "Full Name cannot be empty" }),
    (0, class_validator_1.IsString)({ message: 'Full Name must be string' }),
    (0, tslib_1.__metadata)("design:type", String)
], apply.prototype, "fullName", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)({ message: "Phone Number cannot be empty" }),
    (0, class_validator_1.IsString)({ message: 'Phone Number must be string' }),
    (0, tslib_1.__metadata)("design:type", String)
], apply.prototype, "phoneNumber", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)({ message: "Email cannot be empty" }),
    (0, class_validator_1.IsString)({ message: 'Email must be string' }),
    (0, tslib_1.__metadata)("design:type", String)
], apply.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)({ message: "Message cannot be empty" }),
    (0, class_validator_1.IsString)({ message: 'Message must be string' }),
    (0, tslib_1.__metadata)("design:type", String)
], apply.prototype, "message", void 0);
exports.apply = apply;
//# sourceMappingURL=dto.js.map