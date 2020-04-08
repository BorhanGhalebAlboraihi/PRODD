import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsBalanceAccountComponent } from './statistics-balance-account.component';

describe('StatisticsBalanceAccountComponent', () => {
  let component: StatisticsBalanceAccountComponent;
  let fixture: ComponentFixture<StatisticsBalanceAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsBalanceAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsBalanceAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
