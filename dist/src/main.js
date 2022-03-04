"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const dotenv_1 = (0, tslib_1.__importDefault)(require("dotenv"));
dotenv_1.default.config();
const _modules_1 = (0, tslib_1.__importDefault)(require("./modules"));
process.on('unhandledRejection', (reason) => {
    console.error(reason);
});
process.on('uncaughtException', (reason) => {
    console.error(reason);
});
async function bootstrap() {
    const app = await core_1.NestFactory.create(_modules_1.default);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe());
    const PORT = process.env.PORT || 3000;
    await app.listen(PORT);
    console.log(`App listening on http://localhost:${PORT}`);
}
bootstrap();
//# sourceMappingURL=main.js.map