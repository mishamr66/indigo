import { Test, TestingModule } from '@nestjs/testing';
import { StationService } from './station.service';
import axios from 'axios';

describe('StationService', () => {
  let stationService: StationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StationService],
    }).compile();

    stationService = module.get<StationService>(StationService);
  });

  it('should be defined', () => {
    expect(stationService).toBeDefined();
  });

  describe('getStations', () => {
    it('should fetch station data from the Indego API', async () => {
      const stations = [{ id: '1', name: 'Station 1' }, { id: '2', name: 'Station 2' }];
      const axiosGetSpy = jest.spyOn(axios, 'get').mockResolvedValue({ data: stations });

      expect(await stationService.getStations()).toBe(stations);
      expect(axiosGetSpy).toHaveBeenCalledWith('https://indego.api.com/stations');
    });
  });

  describe('getStation', () => {
    it('should fetch data for a specific station from the Indego API', async () => {
      const kioskId = '1';
      const stationData = { id: '1', name: 'Station 1' };
      const axiosGetSpy = jest.spyOn(axios, 'get').mockResolvedValue({ data: stationData });

      expect(await stationService.getStation(kioskId)).toBe(stationData);
      expect(axiosGetSpy).toHaveBeenCalledWith(`https://indego.api.com/stations/${kioskId}`);
    });
  });
});
