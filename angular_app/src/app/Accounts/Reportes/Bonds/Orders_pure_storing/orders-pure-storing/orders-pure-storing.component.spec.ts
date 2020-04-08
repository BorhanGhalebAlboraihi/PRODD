import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersPureStoringComponent } from './orders-pure-storing.component';

describe('OrdersPureStoringComponent', () => {
  let component: OrdersPureStoringComponent;
  let fixture: ComponentFixture<OrdersPureStoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersPureStoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersPureStoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
