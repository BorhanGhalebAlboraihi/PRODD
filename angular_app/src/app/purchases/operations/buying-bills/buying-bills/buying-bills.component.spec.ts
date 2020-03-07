import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingBillsComponent } from './buying-bills.component';

describe('BuyingBillsComponent', () => {
  let component: BuyingBillsComponent;
  let fixture: ComponentFixture<BuyingBillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyingBillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyingBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
