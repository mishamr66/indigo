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
exports.WeatherService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
let WeatherService = class WeatherService {
    constructor() {
        this.apiKey = "f639abdaa8d24659f01425ad50805392";
        this.apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
    }
    async getWeather(city) {
        try {
            const response = await axios_1.default.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}`);
            return response.data;
        }
        catch (error) {
            throw error;
        }
    }
};
WeatherService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], WeatherService);
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map