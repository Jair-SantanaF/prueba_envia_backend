"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const config_1 = require("./config");
const guideController_1 = require("./controllers/guideController");
exports.app = (0, express_1.default)();
const httpServer = (0, http_1.createServer)(exports.app);
exports.io = new socket_io_1.Server(httpServer);
exports.app.use(express_1.default.static('./public'));
exports.io.on('connection', (socket) => {
    console.log(`Nuevo usuario conectado: ${socket.id}`);
    socket.on('disconnect', () => {
        console.log(`Usuario desconectado: ${socket.id}`);
    });
    socket.on('generateGuide', (guideData) => {
        (0, guideController_1.generateGuide)(guideData);
    });
});
httpServer.listen(config_1.PORT, () => console.log(`Server running on http://localhost:${config_1.PORT}`));
//# sourceMappingURL=app.js.map