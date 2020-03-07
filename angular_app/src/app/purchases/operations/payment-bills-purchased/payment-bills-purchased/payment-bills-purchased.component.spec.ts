import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentBillsPurchasedComponent } from './payment-bills-purchased.component';

describe('PaymentBillsPurchasedComponent', () => {
  let component: PaymentBillsPurchasedComponent;
  let fixture: ComponentFixture<PaymentBillsPurchasedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentBillsPurchasedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentBillsPurchasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
