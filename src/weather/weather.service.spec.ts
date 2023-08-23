import { Test, TestingModule } from '@nestjs/testing';
import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let weatherService: WeatherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeatherService],
    }).compile();

    weatherService = module.get<WeatherService>(WeatherService);
  });

  describe('getWeatherByCity', () => {
    it('should return weather data for a given city', async () => {
      const city = 'Philadelphia'; // Replace with your test data

      const result = await weatherService.getWeather(city);

      expect(result).toBeDefined();
      // You can add more specific assertions here based on your service logic.
    });

    it('should handle errors gracefully', async () => {
      const city = 'InvalidCity'; // Replace with a city that would trigger an error

      const result = await weatherService.getWeather(city);

      expect(result).toHaveProperty('error');
      // You can add more specific assertions for error handling here.
    });
  });
});
