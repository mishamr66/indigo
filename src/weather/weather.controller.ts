// weather.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('api/v1/weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get(':city')
  async getWeather(@Param('city') city: string) {
    return this.weatherService.getWeather(city);
  }
}
