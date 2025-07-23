import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskCatalogComponent } from './risk-catalog.component';

describe('RiskCatalogComponent', () => {
  let component: RiskCatalogComponent;
  let fixture: ComponentFixture<RiskCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskCatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
