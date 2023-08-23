import { HistoricalDataService } from './historical-data.service';
export declare class HistoricalDataController {
    private readonly historicalDataService;
    constructor(historicalDataService: HistoricalDataService);
    getHistoricalData(requestedTime: string): Promise<any>;
    getStationHistoricalData(kioskId: string, requestedTime: string): Promise<any>;
}
