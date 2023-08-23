"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const indego_controller_1 = require("./indego/indego.controller");
const weather_controller_1 = require("./weather/weather.controller");
const app_service_1 = require("./app.service");
const indego_service_1 = require("./indego/indego.service");
const weather_service_1 = require("./weather/weather.service");
const historical_data_controller_1 = require("./historicalData/historical-data.controller");
const historical_data_service_1 = require("./historicalData/historical-data.service");
const station_controller_1 = require("./station/station.controller");
const station_service_1 = require("./station/station.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [
            indego_controller_1.IndegoController,
            weather_controller_1.WeatherController,
            historical_data_controller_1.HistoricalDataController,
            station_controller_1.StationController,
        ],
        providers: [
            app_service_1.AppService,
            indego_service_1.IndegoService,
            weather_service_1.WeatherService,
            historical_data_service_1.HistoricalDataService,
            station_service_1.StationService,
            indego_service_1.OpenWeatherService
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map