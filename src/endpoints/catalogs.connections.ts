import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ocupation } from '../models/ocupation.model';
import { Country } from '../models/country.model';

@Injectable({
    providedIn: 'root',
})
export class GeneralMethodsService {
  
  private urlCatalogs: string = '';
  // EXTENTIONS
  private readonly GET_COUNTRIES = '/countries';
  private readonly GET_TYPE_ID = '/identificationTypes';
  private readonly GET_OCUPATIONS = '/occupations';

  constructor(private http: HttpClient) {
    this.urlCatalogs = environment.serverUrlCatalogs;
  }

  async getOcupations(): Promise<Ocupation[]> {
    try {
      const response$ = this.http.get<{ success: boolean; data: Ocupation[] }>(
        this.urlCatalogs + this.GET_OCUPATIONS
      );

      const response = await lastValueFrom(response$);

      if (response.success) {
        return response.data;
      } else {
        throw new Error('GET_OCUPATIONS request failed');
      }
    } catch (error) {
      console.error('Error en getOcupations:', error);
      return [];
    }
  }

  async getCountries(): Promise<Country[]> {
    try {
      const response$ = this.http.get<{ success: boolean; data: Country[] }>(
        this.urlCatalogs + this.GET_COUNTRIES
      );
      const response = await lastValueFrom(response$);

      if (response.success) {
        return response.data;
      } else {
        throw new Error('GET_COUNTRIES request failed');
      }
    } catch (error) {
      console.error('Error en getCountries:', error);
      return [];
    }
  }
}


  // EXAMPLE
//   async methodExample(): Promise<typeResponse> {
//     const response$ = this.http.get<typeResponse>(
//       this.urlCatalogs + this.extention,
//     );

//     return await lastValueFrom(response$);
//   }