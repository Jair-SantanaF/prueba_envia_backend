"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
let counter = 0;
exports.io = new socket_io_1.Server(httpServer);
exports.app.use(express_1.default.static('./public'));
exports.io.on('connection', (socket) => {
    console.log(`Nuevo usuario conectado: ${socket.id}`);
    exports.io.emit('updateCounter', counter);
    socket.on('disconnect', () => {
        console.log(`Usuario desconectado: ${socket.id}`);
    });
    socket.on('generateGuide', (guideData) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, guideController_1.generateGuide)(guideData);
        if ((response).status === 200 && response.data.meta != "error") {
            console.log('Guía generada exitosamente');
            counter++;
            exports.io.emit('updateCounter', counter);
        }
        else {
            console.error('Error al generar la guía');
        }
    }));
});
httpServer.listen(config_1.PORT, () => console.log(`Server running on http://localhost:${config_1.PORT}`));
//# sourceMappingURL=app.js.map