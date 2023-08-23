import { Test, TestingModule } from '@nestjs/testing';
import { HistoricalDataService } from './historical-data.service';

describe('HistoricalDataService', () => {
  let historicalDataService: HistoricalDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistoricalDataService],
    }).compile();

    historicalDataService = module.get<HistoricalDataService>(HistoricalDataService);
  });

  describe('fetchHistoricalData', () => {
    it('should return historical data for a specified station and time', async () => {
      const kioskId = 'yourKioskId'; // Replace with your test data
      const requestedTime = new Date('2023-08-23T12:00:00.000Z'); // Replace with your test data

      const result = await historicalDataService.fetchHistoricalData(requestedTime);

      expect(result).toBeDefined();
      // You can add more specific assertions here based on your service logic.
    });

    it('should handle errors gracefully', async () => {
      const kioskId = 'InvalidKioskId'; // Replace with a kioskId that would trigger an error
      const requestedTime = new Date('InvalidTime'); // Replace with an invalid time

      const result = await historicalDataService.fetchHistoricalData(requestedTime);

      expect(result).toHaveProperty('error');
      // You can add more specific assertions for error handling here.
    });
  });
});
