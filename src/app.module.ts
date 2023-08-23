import { Module } from '@nestjs/common';
import { IndegoController } from './indego/indego.controller'; 
import { WeatherController } from './weather/weather.controller'; 
import { AppService } from './app.service';
import { IndegoService, OpenWeatherService } from './indego/indego.service'; 
import { WeatherService } from './weather/weather.service'; 
import { HistoricalDataController } from './historicalData/historical-data.controller'; 
import { HistoricalDataService } from './historicalData/historical-data.service'; 
import { StationController } from './station/station.controller'; 
import { StationService } from './station/station.service';

@Module({
  imports: [],
  controllers: [
    IndegoController,
    WeatherController,
    HistoricalDataController,
    StationController,
  ],
  providers: [
    AppService,
    IndegoService,
    WeatherService,
    HistoricalDataService,
    StationService,
    OpenWeatherService
  ],
})
export class AppModule {}
