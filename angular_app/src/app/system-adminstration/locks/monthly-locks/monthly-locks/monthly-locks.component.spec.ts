import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyLocksComponent } from './monthly-locks.component';

describe('MonthlyLocksComponent', () => {
  let component: MonthlyLocksComponent;
  let fixture: ComponentFixture<MonthlyLocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyLocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyLocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
