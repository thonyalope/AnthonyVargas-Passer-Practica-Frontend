import { Component, OnInit } from '@angular/core';
import { GeneralMethodsService } from '../../../endpoints/catalogs.connections';
import { Country } from '../../../models/country.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})

export class CountriesComponent implements OnInit {
  countries: Country[] = [];
  filteredCountries: Country[] = [];
  countryFilter = new FormControl('');
  displayedColumns: string[] = ['name', 'sugefCode', 'riskScore'];

  constructor(private generalMethods: GeneralMethodsService) {}

  async ngOnInit(): Promise<void> {
    this.countries = await this.generalMethods.getCountries();
    console.log('Países cargados:', this.countries);

    this.countryFilter.valueChanges.subscribe((value) => {
      const filterValue = value?.toLowerCase() || '';
      this.filteredCountries = this.countries.filter(country =>
        country.name.toLowerCase().includes(filterValue)
      );
    });
  }
}