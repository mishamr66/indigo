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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationController = void 0;
const common_1 = require("@nestjs/common");
const station_service_1 = require("./station.service");
let StationController = class StationController {
    constructor(stationService) {
        this.stationService = stationService;
    }
    async getStations() {
        const stationsData = await this.stationService.getStations();
        return stationsData;
    }
    async getStation(kioskId) {
        const stationData = await this.stationService.getStation(kioskId);
        return stationData;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StationController.prototype, "getStations", null);
__decorate([
    (0, common_1.Get)(':kioskId'),
    __param(0, (0, common_1.Param)('kioskId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StationController.prototype, "getStation", null);
StationController = __decorate([
    (0, common_1.Controller)('api/v1/stations'),
    __metadata("design:paramtypes", [station_service_1.StationService])
], StationController);
exports.StationController = StationController;
//# sourceMappingURL=station.controller.js.map