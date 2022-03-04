"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportDto = exports.UpdateInsightDto = exports.CreateInsightDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CreateInsightDto {
    title;
    body;
    tags;
    slug;
    publishedOn;
    publishedStatus;
    seoTitle;
    galleryId;
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)({ message: 'Title cannot be empty' }),
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateInsightDto.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)({ message: 'Body cannot be empty' }),
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateInsightDto.prototype, "body", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateInsightDto.prototype, "tags", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsOptional)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateInsightDto.prototype, "slug", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsOptional)(),
    (0, tslib_1.__metadata)("design:type", Date)
], CreateInsightDto.prototype, "publishedOn", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsOptional)(),
    (0, tslib_1.__metadata)("design:type", Number)
], CreateInsightDto.prototype, "publishedStatus", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateInsightDto.prototype, "seoTitle", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, tslib_1.__metadata)("design:type", Number)
], CreateInsightDto.prototype, "galleryId", void 0);
exports.CreateInsightDto = CreateInsightDto;
class UpdateInsightDto {
    title;
    body;
    tags;
    slug;
    publishedOn;
    publishedStatus;
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)({ message: 'Title cannot be empty' }),
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], UpdateInsightDto.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsNotEmpty)({ message: 'Body cannot be empty' }),
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], UpdateInsightDto.prototype, "body", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, tslib_1.__metadata)("design:type", Object)
], UpdateInsightDto.prototype, "tags", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsOptional)(),
    (0, tslib_1.__metadata)("design:type", String)
], UpdateInsightDto.prototype, "slug", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsOptional)(),
    (0, tslib_1.__metadata)("design:type", Date)
], UpdateInsightDto.prototype, "publishedOn", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsOptional)(),
    (0, tslib_1.__metadata)("design:type", Number)
], UpdateInsightDto.prototype, "publishedStatus", void 0);
exports.UpdateInsightDto = UpdateInsightDto;
class ExportDto {
    title;
    publishedStatus;
    publishedOn;
    all;
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], ExportDto.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, tslib_1.__metadata)("design:type", String)
], ExportDto.prototype, "publishedStatus", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsOptional)(),
    (0, tslib_1.__metadata)("design:type", Date)
], ExportDto.prototype, "publishedOn", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsBooleanString)(),
    (0, class_validator_1.IsOptional)(),
    (0, tslib_1.__metadata)("design:type", String)
], ExportDto.prototype, "all", void 0);
exports.ExportDto = ExportDto;
//# sourceMappingURL=insights.dto.js.map