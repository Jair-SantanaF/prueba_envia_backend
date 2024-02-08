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
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateGuide = void 0;
const app_1 = require("../app");
const api_1 = require("../utils/api");
const generateGuide = (guideData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, api_1.generateGuideApiCall)(guideData);
        if (response.status === 200 && response.data.meta != "error") {
            console.log('Guía generada exitosamente:', response.data);
            app_1.io.emit('updateCounter', { counter: 1 });
        }
        else {
            console.error('Error al generar la guía:', response.data);
            app_1.io.emit('updateCounter', { counter: 0 });
        }
    }
    catch (error) {
        console.error('Error al generar la guía:', error);
    }
});
exports.generateGuide = generateGuide;
//# sourceMappingURL=guideController.js.map