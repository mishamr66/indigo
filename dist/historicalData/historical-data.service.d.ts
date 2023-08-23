import { OpenWeatherService } from 'src/indego/indego.service';
export declare class HistoricalDataService {
    private readonly openWeatherService;
    constructor(openWeatherService: OpenWeatherService);
    getHistoricalData(requestedTime: Date): Promise<any>;
    fetchHistoricalData(requestedTime: Date): Promise<any>;
}
