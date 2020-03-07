import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSupplyComponent } from './order-supply.component';

describe('OrderSupplyComponent', () => {
  let component: OrderSupplyComponent;
  let fixture: ComponentFixture<OrderSupplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSupplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
