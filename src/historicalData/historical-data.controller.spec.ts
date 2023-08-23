import { Test, TestingModule } from '@nestjs/testing';
import { HistoricalDataController } from './historical-data.controller';
import { HistoricalDataService } from './historical-data.service';

describe('HistoricalDataController', () => {
  let historicalDataController: HistoricalDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistoricalDataController],
      providers: [HistoricalDataService], // You should also mock the service here if needed.
    }).compile();

    historicalDataController = module.get<HistoricalDataController>(HistoricalDataController);
  });

  describe('GET /api/v1/historical-data/:kioskId/:requestedTime', () => {
    it('should return historical data for a specified station and time', async () => {
      const kioskId = 'yourKioskId'; // Replace with your test data
      const requestedTime = '2023-08-23T12:00:00.000Z'; // Replace with your test data

      const result = await historicalDataController.getStationHistoricalData(kioskId, requestedTime);

      expect(result).toBeDefined();
      // You can add more specific assertions here based on your controller logic.
    });

    it('should handle errors gracefully', async () => {
      const kioskId = 'InvalidKioskId'; // Replace with a kioskId that would trigger an error
      const requestedTime = 'InvalidTime'; // Replace with an invalid time

      const result = await historicalDataController.getStationHistoricalData(kioskId, requestedTime);

      expect(result).toHaveProperty('error');
      // You can add more specific assertions for error handling here.
    });
  });
});
