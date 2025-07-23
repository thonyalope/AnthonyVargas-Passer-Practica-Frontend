import { Component, OnInit } from '@angular/core';
import { GeneralMethodsService } from '../../../endpoints/catalogs.connections';
import { Country } from '../../../models/country.model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})

export class CountriesComponent implements OnInit {
  countries: Country[] = [];

  constructor(private generalMethods: GeneralMethodsService) {}

  async ngOnInit(): Promise<void> {
    this.countries = await this.generalMethods.getCountries();
    console.log('Países cargados:', this.countries);
  }
}