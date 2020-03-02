import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoresBudgetComponent } from './catagores-budget.component';

describe('CatagoresBudgetComponent', () => {
  let component: CatagoresBudgetComponent;
  let fixture: ComponentFixture<CatagoresBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatagoresBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatagoresBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
