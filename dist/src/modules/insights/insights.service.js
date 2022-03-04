"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsightsService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const prisma_1 = (0, tslib_1.__importDefault)(require("../../services/prisma"));
const slugify_1 = (0, tslib_1.__importDefault)(require("slugify"));
let InsightsService = class InsightsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createInsightDto, galleryId) {
        const dataFound = await this.prisma.gallery.findUnique({
            where: { id: galleryId },
        });
        if (!dataFound) {
            delete createInsightDto.galleryId;
        }
        try {
            createInsightDto['slug'] = (0, slugify_1.default)(createInsightDto['title'], {
                lower: true,
            });
            createInsightDto['seoTitle'] = createInsightDto['seoTitle']
                ? createInsightDto['seoTitle']
                : createInsightDto['title'];
            const isSlugExists = await this.prisma.insight.findFirst({
                where: {
                    slug: createInsightDto['slug'],
                },
            });
            if (isSlugExists) {
                throw new common_1.BadRequestException({
                    status: 'failed',
                    message: 'Slug already exist; try another title',
                });
            }
            const inserted = await this.prisma.insight.create({
                data: createInsightDto,
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
        const insights = await this.prisma.insight.findMany({
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
        const count = await this.prisma.insight.count();
        return {
            insights,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
            sort,
        };
    }
    async search(query) {
        return await this.prisma.insight.findMany({
            where: {
                title: {
                    contains: query.SearchFilter,
                },
                body: {
                    contains: query.SearchFilter,
                },
            },
        });
    }
    async increaseViews(insight_id) {
        const insight = await this.prisma.insight.update({
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
        const insight = await this.prisma.insight.findUnique({
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
            const isTitleExists = await this.prisma.insight.findFirst({
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
            const insight = await this.prisma.insight.update({
                where: { id },
                data: payload,
            });
            if (insight) {
                return {
                    status: 'success',
                    message: 'insight updated successfully',
                    data: insight,
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
            const insight = await this.prisma.insight.update({
                data: {
                    publishedStatus: publishedStatus,
                    publishedOn: new Date(),
                },
                where: {
                    id: id,
                },
            });
            if (insight) {
                const message = publishedStatus == 1 ? 'Published' : 'Sent to draft';
                return {
                    status: 'success',
                    message: `Insight now ${message}`,
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
            const insight = await this.prisma.insight.delete({ where: { id } });
            if (insight) {
                return { status: 'success', message: 'Insight deleted successfully' };
            }
            throw new common_1.BadRequestException({
                status: 'failed',
                message: 'Failed to delete insight',
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async removeMany(ids) {
        try {
            const insight = await this.prisma.insight.deleteMany({
                where: {
                    id: {
                        in: ids,
                    },
                },
            });
            if (insight) {
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
    async exportAllInsight() {
        const insightFound = await this.prisma.insight.findMany();
        if (insightFound.length !== 0) {
            return insightFound;
        }
        throw new common_1.BadRequestException({
            status: 'failed',
            message: 'No insight written yet',
        });
    }
    async exportInsight(publishedStatus) {
        const insightFound = await this.prisma.insight.findMany({
            where: {
                publishedStatus: publishedStatus,
            },
        });
        if (insightFound.length !== 0) {
            return insightFound;
        }
        throw new common_1.BadRequestException({
            status: 'failed',
            message: 'No insight written yet',
        });
    }
    async exportTitle(title) {
        const insights = await this.prisma.insight.findMany({
            where: {
                title: {
                    contains: title,
                },
            },
        });
        if (insights.length === 0) {
            throw new common_1.BadRequestException({
                status: 'failed',
                message: 'No insight found',
            });
        }
        return insights;
    }
    async exportPublishedOn(date_published) {
        const insights = await this.prisma.insight.findMany({
            where: {
                publishedOn: date_published,
            },
        });
        if (insights.length === 0) {
            throw new common_1.BadRequestException({
                status: 'failed',
                message: 'No insight published on this date',
            });
        }
        return insights;
    }
};
InsightsService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [prisma_1.default])
], InsightsService);
exports.InsightsService = InsightsService;
//# sourceMappingURL=insights.service.js.map