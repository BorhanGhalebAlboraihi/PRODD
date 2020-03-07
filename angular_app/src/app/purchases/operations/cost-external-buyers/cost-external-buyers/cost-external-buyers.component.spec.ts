import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostExternalBuyersComponent } from './cost-external-buyers.component';

describe('CostExternalBuyersComponent', () => {
  let component: CostExternalBuyersComponent;
  let fixture: ComponentFixture<CostExternalBuyersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostExternalBuyersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostExternalBuyersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
