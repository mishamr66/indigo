
import { Injectable } from "@nestjs/common";
import axios from "axios";
import { env } from "process";

@Injectable()
export class IndegoService {
  async getIndegoData(): Promise<any> {
    try {
      const response = await axios.get('https://indego.api.com/data');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

@Injectable()
export class OpenWeatherService {
  private readonly apiKey: string;

  constructor() {
    this.apiKey = "f639abdaa8d24659f01425ad50805392";
  }

  async getWeatherData(city: string): Promise<any> {
    if (!this.apiKey) {
        throw new Error('OpenWeatherMap API key is not defined.');
      }
    try {
      const response = await axios.get(
        `https://openweathermap.org/api/data/${city}?appid=${this.apiKey}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
