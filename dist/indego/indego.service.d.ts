export declare class IndegoService {
    getIndegoData(): Promise<any>;
}
export declare class OpenWeatherService {
    private readonly apiKey;
    constructor();
    getWeatherData(city: string): Promise<any>;
}
