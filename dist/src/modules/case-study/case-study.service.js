"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseStudyService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const prisma_1 = (0, tslib_1.__importDefault)(require("../../services/prisma"));
const slugify_1 = (0, tslib_1.__importDefault)(require("slugify"));
let CaseStudyService = class CaseStudyService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createCaseStudyDto, galleryId) {
        const dataFound = await this.prisma.gallery.findUnique({
            where: { id: galleryId },
        });
        if (!dataFound) {
            delete createCaseStudyDto.galleryId;
        }
        try {
            createCaseStudyDto['slug'] = (0, slugify_1.default)(createCaseStudyDto['title'], {
                lower: true,
            });
            createCaseStudyDto['seoTitle'] = createCaseStudyDto['seoTitle']
                ? createCaseStudyDto['seoTitle']
                : createCaseStudyDto['title'];
            const isSlugExists = await this.prisma.caseStudy.findFirst({
                where: {
                    slug: createCaseStudyDto['slug'],
                },
            });
            if (isSlugExists) {
                throw new common_1.BadRequestException({
                    status: 'failed',
                    message: 'Slug/Title already exists; try another',
                });
            }
            const inserted = await this.prisma.caseStudy.create({
                data: createCaseStudyDto,
            });
            if (inserted) {
                return {
                    status: 'success',
                    message: {
                        data: inserted,
                    },
                };
            }
        }
        catch (error) {
            throw new common_1.HttpException({ status: 'false', error: error.message }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll(limit, page, sort) {
        const case_study = await this.prisma.caseStudy.findMany({
            skip: (page - 1) * limit,
            take: limit * 1,
            orderBy: {
                [sort]: 'desc',
            },
            include: {
                createdBy: {
                    select: {
                        firstName: true,
                        lastName: true,
                    },
                },
            },
        });
        const count = await this.prisma.caseStudy.count();
        return {
            case_study,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
            sort,
        };
    }
    async search(query) {
        const data = await this.prisma.caseStudy.findMany({
            where: {
                OR: [
                    {
                        title: {
                            contains: query.SearchFilter,
                            mode: 'insensitive'
                        },
                    },
                    {
                        body: {
                            contains: query.SearchFilter,
                            mode: 'insensitive'
                        },
                    },
                ],
            },
        });
        if (data) {
            return data;
        }
        return 'not found';
    }
    async increaseViews(insight_id) {
        const insight = await this.prisma.caseStudy.update({
            data: {
                views: { increment: 1 },
            },
            where: { id: insight_id },
        });
        if (insight) {
            return true;
        }
    }
    async findOne(id) {
        const insight = await this.prisma.caseStudy.findUnique({
            where: { id: id },
            include: {
                createdBy: {
                    select: {
                        firstName: true,
                        lastName: true,
                    },
                },
            },
        });
        if (insight) {
            await this.increaseViews(id);
            return {
                status: 'success',
                message: {
                    data: insight,
                },
            };
        }
        throw new common_1.HttpException(`failed`, common_1.HttpStatus.NOT_FOUND);
    }
    async update(id, payload) {
        try {
            const isTitleExists = await this.prisma.caseStudy.findFirst({
                where: {
                    title: payload['title'],
                    id: {
                        not: id,
                    },
                },
            });
            if (isTitleExists) {
                throw new common_1.BadRequestException({
                    status: 'failed',
                    message: 'Title/Slug already exist; try another name',
                });
            }
            const case_study = await this.prisma.caseStudy.update({
                where: { id },
                data: payload,
            });
            if (case_study) {
                return {
                    status: 'success',
                    message: 'case study updated successfully',
                    data: case_study,
                };
            }
            throw new common_1.BadRequestException({
                status: 'failed',
                message: 'Failed to update the case study',
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async toggleStatus(id, publishedStatus) {
        try {
            const case_study = await this.prisma.caseStudy.update({
                data: {
                    publishedStatus: publishedStatus,
                    publishedOn: new Date(),
                },
                where: { id },
            });
            if (case_study) {
                const message = publishedStatus == 1 ? 'Published' : 'Sent to draft';
                return {
                    status: 'success',
                    message: `Case study now ${message}`,
                    statusCode: common_1.HttpStatus.OK,
                };
            }
        }
        catch (error) {
            throw new common_1.BadRequestException({
                status: 'failed to publish insight',
                message: error,
                statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
            });
        }
    }
    async remove(id) {
        try {
            const caseStudyDelete = await this.prisma.caseStudy.delete({
                where: { id },
            });
            if (caseStudyDelete) {
                return {
                    status: 'success',
                    message: 'Delete successful',
                };
            }
            throw new common_1.BadRequestException({
                status: 'error',
                message: 'Operation Failed',
            });
        }
        catch (errors) {
            throw new common_1.InternalServerErrorException(errors);
        }
    }
    async removeMany(ids) {
        try {
            const caseStudy = await this.prisma.caseStudy.deleteMany({
                where: {
                    id: {
                        in: ids,
                    },
                },
            });
            if (caseStudy) {
                return {
                    status: 'success',
                    message: 'Bulk delete successful',
                };
            }
            throw new common_1.BadRequestException({
                status: 'error',
                message: 'Operation Failed',
            });
        }
        catch (errors) {
            throw new common_1.InternalServerErrorException(errors);
        }
    }
    async exportAllCaseStudies() {
        const caseStudyFound = await this.prisma.insight.findMany();
        if (caseStudyFound.length !== 0) {
            return caseStudyFound;
        }
        throw new common_1.BadRequestException({
            status: 'failed',
            message: 'No insight written yet',
        });
    }
    async exportByPublishedStatus(publishedStatus) {
        const caseStudyFound = await this.prisma.caseStudy.findMany({
            where: {
                publishedStatus: publishedStatus,
            },
        });
        if (caseStudyFound.length !== 0) {
            return caseStudyFound;
        }
        throw new common_1.BadRequestException({
            status: 'failed',
            message: 'No insight written yet',
        });
    }
    async exportByTitle(title) {
        const case_studies = await this.prisma.caseStudy.findMany({
            where: {
                title: {
                    contains: title,
                    mode: 'insensitive',
                },
            },
        });
        if (case_studies.length === 0) {
            throw new common_1.BadRequestException({
                status: 'failed',
                message: 'Case study not found with this search term',
            });
        }
        return case_studies;
    }
    async exportPublishedOn(date_published) {
        const case_studies = await this.prisma.insight.findMany({
            where: {
                publishedOn: date_published,
            },
        });
        if (case_studies.length === 0) {
            throw new common_1.BadRequestException({
                status: 'failed',
                message: 'No case study published on this date',
            });
        }
        return case_studies;
    }
};
CaseStudyService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [prisma_1.default])
], CaseStudyService);
exports.CaseStudyService = CaseStudyService;
//# sourceMappingURL=case-study.service.js.map