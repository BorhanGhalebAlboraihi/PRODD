import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePricesComponent } from './change-prices.component';

describe('ChangePricesComponent', () => {
  let component: ChangePricesComponent;
  let fixture: ComponentFixture<ChangePricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
