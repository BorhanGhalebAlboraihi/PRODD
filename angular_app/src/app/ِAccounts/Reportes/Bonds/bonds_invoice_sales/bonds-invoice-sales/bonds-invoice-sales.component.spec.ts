import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondsInvoiceSalesComponent } from './bonds-invoice-sales.component';

describe('BondsInvoiceSalesComponent', () => {
  let component: BondsInvoiceSalesComponent;
  let fixture: ComponentFixture<BondsInvoiceSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondsInvoiceSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondsInvoiceSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
