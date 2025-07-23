import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GeneralMethodsService } from '../../../endpoints/catalogs.connections';
import { Ocupation } from '../../../models/ocupation.model';

@Component({
  selector: 'app-occupations',
  templateUrl: './occupations.component.html',
  styleUrls: ['./occupations.component.scss']
})
export class OccupationsComponent implements OnInit {
  ocupations: Ocupation[] = [];
  filteredOcupations: Ocupation[] = [];
  occupationFilter = new FormControl('');
  displayedColumns: string[] = ['name', 'action'];

  constructor(private generalMethods: GeneralMethodsService) {}

  async ngOnInit(): Promise<void> {
    this.ocupations = await this.generalMethods.getOcupations();
    this.filteredOcupations = this.ocupations;

    this.occupationFilter.valueChanges.subscribe(value => {
      const filter = (value || '').toLowerCase();
      this.filteredOcupations = this.ocupations.filter(o =>
        o.name.toLowerCase().includes(filter)
      );
    });
  }
}
