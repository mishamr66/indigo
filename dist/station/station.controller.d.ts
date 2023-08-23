import { StationService } from './station.service';
export declare class StationController {
    private readonly stationService;
    constructor(stationService: StationService);
    getStations(): Promise<any>;
    getStation(kioskId: string): Promise<any>;
}
