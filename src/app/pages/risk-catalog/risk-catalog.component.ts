import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OccupationsComponent } from '../occupations/occupations.component';

@Component({
  selector: 'app-risk-catalog',
  templateUrl: './risk-catalog.component.html',
  styleUrls: ['./risk-catalog.component.scss']
})
export class RiskCatalogComponent {
  selectedTabIndex = 0;
}
