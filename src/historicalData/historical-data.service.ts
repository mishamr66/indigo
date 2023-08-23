// historical-data.service.ts
import { Injectable } from '@nestjs/common';
import { OpenWeatherService } from 'src/indego/indego.service';

@Injectable()
export class HistoricalDataService {
    constructor(private readonly openWeatherService: OpenWeatherService) { }

    async getHistoricalData(requestedTime: Date): Promise<any> {
        try {
            // Fetch historical data from external source or generate it dynamically
            const historicalData = await this.fetchHistoricalData(requestedTime);

            // If you need weather data, fetch it from the OpenWeatherMap API
            const weatherData = await this.openWeatherService.getWeatherData('Philadelphia');

            // Combine historical and weather data as needed
            const combinedData = {
                historical: historicalData,
                weather: weatherData,
            };

            return combinedData;
        } catch (error) {
            throw error;
        }
    }

    async fetchHistoricalData(requestedTime: Date): Promise<any> {
        // Return the historical data as an object with properties.
        return {
            timestamp: requestedTime,
            dataField1: 'Value1',
            dataField2: 'Value2',
        };
    }
}
