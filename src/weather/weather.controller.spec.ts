import { Test, TestingModule } from '@nestjs/testing';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';

describe('WeatherController', () => {
  let weatherController: WeatherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WeatherController],
      providers: [WeatherService], // You should also mock the service here if needed.
    }).compile();

    weatherController = module.get<WeatherController>(WeatherController);
  });

  describe('GET /weather/:city', () => {
    it('should return weather data for a given city', async () => {
      const city = 'Philadelphia'; // Replace with your test data

      const result = await weatherController.getWeather(city);

      expect(result).toBeDefined();
      // You can add more specific assertions here based on your controller logic.
    });

    it('should handle errors gracefully', async () => {
      const city = 'InvalidCity'; // Replace with a city that would trigger an error

      const result = await weatherController.getWeather(city);

      expect(result).toHaveProperty('error');
      // You can add more specific assertions for error handling here.
    });
  });
});
