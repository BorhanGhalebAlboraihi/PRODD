import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksSettlementComponent } from './stocks-settlement.component';

describe('StocksSettlementComponent', () => {
  let component: StocksSettlementComponent;
  let fixture: ComponentFixture<StocksSettlementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocksSettlementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksSettlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
