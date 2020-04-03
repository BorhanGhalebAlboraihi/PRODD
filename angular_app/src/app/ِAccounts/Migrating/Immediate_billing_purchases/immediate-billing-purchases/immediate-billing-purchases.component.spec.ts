import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmediateBillingPurchasesComponent } from './immediate-billing-purchases.component';

describe('ImmediateBillingPurchasesComponent', () => {
  let component: ImmediateBillingPurchasesComponent;
  let fixture: ComponentFixture<ImmediateBillingPurchasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmediateBillingPurchasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmediateBillingPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
