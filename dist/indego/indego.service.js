"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenWeatherService = exports.IndegoService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
let IndegoService = class IndegoService {
    async getIndegoData() {
        try {
            const response = await axios_1.default.get('https://indego.api.com/data');
            return response.data;
        }
        catch (error) {
            throw error;
        }
    }
};
IndegoService = __decorate([
    (0, common_1.Injectable)()
], IndegoService);
exports.IndegoService = IndegoService;
let OpenWeatherService = class OpenWeatherService {
    constructor() {
        this.apiKey = "f639abdaa8d24659f01425ad50805392";
    }
    async getWeatherData(city) {
        if (!this.apiKey) {
            throw new Error('OpenWeatherMap API key is not defined.');
        }
        try {
            const response = await axios_1.default.get(`https://openweathermap.org/api/data/${city}?appid=${this.apiKey}`);
            return response.data;
        }
        catch (error) {
            throw error;
        }
    }
};
OpenWeatherService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], OpenWeatherService);
exports.OpenWeatherService = OpenWeatherService;
//# sourceMappingURL=indego.service.js.map