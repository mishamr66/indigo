export declare class WeatherService {
    private readonly apiKey;
    private readonly apiUrl;
    constructor();
    getWeather(city: string): Promise<any>;
}
