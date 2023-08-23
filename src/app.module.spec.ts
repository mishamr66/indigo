import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';
import { IndegoController } from './indego/indego.controller';
import { WeatherController } from './weather/weather.controller';
import { HistoricalDataController } from './historicalData/historical-data.controller';
import { StationController } from './station/station.controller';
import { AppService } from './app.service';
import { IndegoService } from './indego/indego.service';
import { WeatherService } from './weather/weather.service';
import { HistoricalDataService } from './historicalData/historical-data.service';
import { StationService } from './station/station.service';

describe('AppModule', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [AppModule],
      controllers: [IndegoController, WeatherController, HistoricalDataController, StationController],
      providers: [AppService, IndegoService, WeatherService, HistoricalDataService, StationService],
    }).compile();
  });

  it('should be defined', () => {
    expect(app).toBeDefined();
  });

  afterAll(async () => {
    await app.close();
  });
});
