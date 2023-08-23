import { Controller, Get, Param } from '@nestjs/common';
import { StationService } from './station.service';

@Controller('api/v1/stations')
export class StationController {
  constructor(private readonly stationService: StationService) {}

  @Get()
  async getStations() {
    // Implement logic to fetch and return station data
    const stationsData = await this.stationService.getStations();
    return stationsData;
  }

  @Get(':kioskId')
  async getStation(@Param('kioskId') kioskId: string) {
    // Implement logic to fetch and return data for a specific station
    const stationData = await this.stationService.getStation(kioskId);
    return stationData;
  }
}
