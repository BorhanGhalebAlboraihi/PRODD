import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorSupplyOrdersComponent } from './stor-supply-orders.component';

describe('StorSupplyOrdersComponent', () => {
  let component: StorSupplyOrdersComponent;
  let fixture: ComponentFixture<StorSupplyOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorSupplyOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorSupplyOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
