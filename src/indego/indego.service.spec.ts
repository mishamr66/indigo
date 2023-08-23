import { Test, TestingModule } from '@nestjs/testing';
import { IndegoService } from './indego.service';

describe('IndegoService', () => {
  let indegoService: IndegoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IndegoService],
    }).compile();

    indegoService = module.get<IndegoService>(IndegoService);
  });

  it('should be defined', () => {
    expect(indegoService).toBeDefined();
  });

  describe('getIndegoData', () => {
    it('should return an array of Indego data', async () => {
      // Mock any dependencies or external services as needed
      // Mock the data source or API calls
      // For simplicity, we're directly returning mock data

      // Call the service method
      const result = await indegoService.getIndegoData();

      // Assertions
      const expectedResult = 'someValue';
      expect(result).toEqual(expectedResult);
    });
  });
});
