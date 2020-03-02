import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundorSupplyComponent } from './refundor-supply.component';

describe('RefundorSupplyComponent', () => {
  let component: RefundorSupplyComponent;
  let fixture: ComponentFixture<RefundorSupplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundorSupplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundorSupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
