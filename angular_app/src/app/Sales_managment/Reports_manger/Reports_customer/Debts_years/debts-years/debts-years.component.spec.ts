import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtsYearsComponent } from './debts-years.component';

describe('DebtsYearsComponent', () => {
  let component: DebtsYearsComponent;
  let fixture: ComponentFixture<DebtsYearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtsYearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtsYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
