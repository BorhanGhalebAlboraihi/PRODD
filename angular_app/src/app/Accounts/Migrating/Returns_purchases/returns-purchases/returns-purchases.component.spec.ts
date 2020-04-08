import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnsPurchasesComponent } from './returns-purchases.component';

describe('ReturnsPurchasesComponent', () => {
  let component: ReturnsPurchasesComponent;
  let fixture: ComponentFixture<ReturnsPurchasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnsPurchasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnsPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
