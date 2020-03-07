import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostLocalBuyersComponent } from './cost-local-buyers.component';

describe('CostLocalBuyersComponent', () => {
  let component: CostLocalBuyersComponent;
  let fixture: ComponentFixture<CostLocalBuyersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostLocalBuyersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostLocalBuyersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
