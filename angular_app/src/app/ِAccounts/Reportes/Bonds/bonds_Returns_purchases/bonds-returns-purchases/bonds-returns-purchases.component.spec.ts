import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondsReturnsPurchasesComponent } from './bonds-returns-purchases.component';

describe('BondsReturnsPurchasesComponent', () => {
  let component: BondsReturnsPurchasesComponent;
  let fixture: ComponentFixture<BondsReturnsPurchasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondsReturnsPurchasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondsReturnsPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
