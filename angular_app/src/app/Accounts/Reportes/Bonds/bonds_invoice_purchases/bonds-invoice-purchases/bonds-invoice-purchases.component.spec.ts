import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondsInvoicePurchasesComponent } from './bonds-invoice-purchases.component';

describe('BondsInvoicePurchasesComponent', () => {
  let component: BondsInvoicePurchasesComponent;
  let fixture: ComponentFixture<BondsInvoicePurchasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondsInvoicePurchasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondsInvoicePurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
