import { Test, TestingModule } from '@nestjs/testing';
import { IndegoController } from './indego.controller';
import { IndegoService } from './indego.service';

describe('IndegoController', () => {
  let indegoController: IndegoController;
  let indegoService: IndegoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IndegoController],
      providers: [IndegoService], // Mock or provide a real service
    }).compile();

    indegoController = module.get<IndegoController>(IndegoController);
    indegoService = module.get<IndegoService>(IndegoService);
  });

  it('should be defined', () => {
    expect(indegoController).toBeDefined();
  });

  describe('getIndegoData', () => {
    it('should return an array of Indego data', async () => {
      // Mock the service method's return value
      const mockData = [{ id: 1, name: 'Station 1' }];
      jest.spyOn(indegoService, 'getIndegoData').mockResolvedValue(mockData);

      // Call the controller method
      const result = await indegoController.getIndegoData();

      // Assertions
      expect(result).toEqual(mockData);
    });
  });
});
