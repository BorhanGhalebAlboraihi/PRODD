import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersResorsComponent } from './orders-resors.component';

describe('OrdersResorsComponent', () => {
  let component: OrdersResorsComponent;
  let fixture: ComponentFixture<OrdersResorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersResorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersResorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
