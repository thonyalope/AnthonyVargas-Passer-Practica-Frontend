import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RiskCatalogComponent } from './pages/risk-catalog/risk-catalog.component';

const routes: Routes = [
  { path: '', component: RiskCatalogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
