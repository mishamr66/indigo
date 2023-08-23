// weather.service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WeatherService {
  private readonly apiKey: string;
  private readonly apiUrl: string;

  constructor() {
    this.apiKey = "f639abdaa8d24659f01425ad50805392";
    this.apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  }

  async getWeather(city: string): Promise<any> {
    try {
      const response = await axios.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
