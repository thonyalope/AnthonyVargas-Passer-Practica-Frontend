import { Component, OnInit } from '@angular/core';
import { GeneralMethodsService } from '../../../endpoints/catalogs.connections';
import { TypeId } from '../../../models/type-id.model';

@Component({
  selector: 'app-identification-type',
  templateUrl: './identification-type.component.html',
  styleUrls: ['./identification-type.component.scss']
})

export class IdentificationTypeComponent implements OnInit {
  typeIds: TypeId[] = [];
  selectedTypeId: string | null = null;
  filteredIds: any[] = []; 
  displayedColumns: string[] = ['name', 'code', 'country'];

  constructor(private generalMethods: GeneralMethodsService) {}

  async ngOnInit(): Promise<void> {
    this.typeIds = await this.generalMethods.getTypeIds();
    console.log('Tipos de identificación cargados:', this.typeIds);
  }
}