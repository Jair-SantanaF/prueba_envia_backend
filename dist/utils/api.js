"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateGuideApiCall = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config");
const generateGuideApiCall = (guideData) => {
    return axios_1.default.post(config_1.API_URL, guideData, {
        headers: {
            'Authorization': `Bearer ${config_1.API_KEY}`,
            'Content-Type': 'application/json',
        },
    });
};
exports.generateGuideApiCall = generateGuideApiCall;
//# sourceMappingURL=api.js.map