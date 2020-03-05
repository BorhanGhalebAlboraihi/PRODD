import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopPeriodsComponent } from './stop-periods.component';

describe('StopPeriodsComponent', () => {
  let component: StopPeriodsComponent;
  let fixture: ComponentFixture<StopPeriodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopPeriodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopPeriodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
