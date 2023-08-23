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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoricalDataService = void 0;
const common_1 = require("@nestjs/common");
const indego_service_1 = require("../indego/indego.service");
let HistoricalDataService = class HistoricalDataService {
    constructor(openWeatherService) {
        this.openWeatherService = openWeatherService;
    }
    async getHistoricalData(requestedTime) {
        try {
            const historicalData = await this.fetchHistoricalData(requestedTime);
            const weatherData = await this.openWeatherService.getWeatherData('Philadelphia');
            const combinedData = {
                historical: historicalData,
                weather: weatherData,
            };
            return combinedData;
        }
        catch (error) {
            throw error;
        }
    }
    async fetchHistoricalData(requestedTime) {
        return {
            timestamp: requestedTime,
            dataField1: 'Value1',
            dataField2: 'Value2',
        };
    }
};
HistoricalDataService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [indego_service_1.OpenWeatherService])
], HistoricalDataService);
exports.HistoricalDataService = HistoricalDataService;
//# sourceMappingURL=historical-data.service.js.map