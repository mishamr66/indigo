import { Test, TestingModule } from '@nestjs/testing';
import { StationController } from './station.controller';
import { StationService } from './station.service';

describe('StationController', () => {
  let stationController: StationController;
  let stationService: StationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StationController],
      providers: [StationService],
    }).compile();

    stationController = module.get<StationController>(StationController);
    stationService = module.get<StationService>(StationService);
  });

  it('should be defined', () => {
    expect(stationController).toBeDefined();
  });

  describe('getStations', () => {
    it('should return an array of stations', async () => {
      const stations = [{ id: '1', name: 'Station 1' }, { id: '2', name: 'Station 2' }];

      jest.spyOn(stationService, 'getStations').mockResolvedValue(stations);

      expect(await stationController.getStations()).toBe(stations);
    });
  });

  describe('getStation', () => {
    it('should return data for a specific station', async () => {
      const kioskId = '1';
      const stationData = { id: '1', name: 'Station 1' };

      jest.spyOn(stationService, 'getStation').mockResolvedValue(stationData);

      expect(await stationController.getStation(kioskId)).toBe(stationData);
    });
  });
});
