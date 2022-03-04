"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskScheduleModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const task_schedule_service_1 = require("./task-schedule.service");
let TaskScheduleModule = class TaskScheduleModule {
};
TaskScheduleModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        providers: [task_schedule_service_1.TaskScheduleService]
    })
], TaskScheduleModule);
exports.TaskScheduleModule = TaskScheduleModule;
//# sourceMappingURL=task-schedule.module.js.map