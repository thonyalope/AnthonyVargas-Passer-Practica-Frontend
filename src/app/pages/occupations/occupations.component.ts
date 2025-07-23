import { Component, OnInit } from '@angular/core';
import { GeneralMethodsService } from '../../../endpoints/catalogs.connections';
import { Ocupation } from '../../../models/ocupation.model';

@Component({
  selector: 'app-occupations',
  templateUrl: './occupations.component.html',
  styleUrls: ['./occupations.component.scss']
})

export class OccupationsComponent implements OnInit {
  ocupations: Ocupation[] = [];

  constructor(private generalMethods: GeneralMethodsService) {}

  async ngOnInit(): Promise<void> {
    this.ocupations = await this.generalMethods.getOcupations();
    console.log('Ocupaciones cargadas:', this.ocupations);
  }
}