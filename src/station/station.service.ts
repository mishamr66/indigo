import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class StationService {
  async getStations(): Promise<any> {
    try {
      // Implement logic to fetch station data from the Indego API
      const response = await axios.get('https://indego.api.com/stations');
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getStation(kioskId: string): Promise<any> {
    try {
      // Implement logic to fetch data for a specific station
      const response = await axios.get(`https://indego.api.com/stations/${kioskId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
