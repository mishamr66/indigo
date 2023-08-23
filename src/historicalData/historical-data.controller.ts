import { Controller, Get, Query, Param } from '@nestjs/common';
import { HistoricalDataService } from './historical-data.service';

@Controller('api/v1/historical-data')
export class HistoricalDataController {
  constructor(private readonly historicalDataService: HistoricalDataService) {}

  @Get()
  async getHistoricalData(@Query('requestedTime') requestedTime: string) {
    try {
      // Parse the requestedTime string into a Date object
      const requestedDateTime = new Date(requestedTime);

      // Call the HistoricalDataService to get historical data
      const data = await this.historicalDataService.getHistoricalData(requestedDateTime);

      // Return the data as a JSON response
      return data;
    } catch (error) {
      // Handle errors and return an appropriate response
      return { error: 'An error occurred' };
    }
  }

  @Get(':kioskId/:requestedTime')
  async getStationHistoricalData(
    @Param('kioskId') kioskId: string,
    @Param('requestedTime') requestedTime: string,
  ) {
    try {
      // Parse the requestedTime parameter into a Date object
      const timestamp = new Date(requestedTime);

      // Call the HistoricalDataService to fetch historical data for the specified station and time
      const historicalData = await this.historicalDataService.fetchHistoricalData(timestamp);

      // Return the historical data as a JSON response
      return historicalData;
    } catch (error) {
      // Handle errors and return an appropriate response
      return { error: 'An error occurred' };
    }
  }
}


//   @Get(':kioskId')
//   async getStationHistoricalData(@Param('kioskId') kioskId: string) {
//     // Implement logic to fetch and return historical data for a specific station
//     const historicalData = await this.historicalDataService.getStationHistoricalData(kioskId);
//     return historicalData;
 
