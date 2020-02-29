import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyCoinComponent } from './currency-coin.component';

describe('CurrencyCoinComponent', () => {
  let component: CurrencyCoinComponent;
  let fixture: ComponentFixture<CurrencyCoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyCoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
