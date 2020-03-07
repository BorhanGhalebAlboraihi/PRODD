import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyArrestsComponent } from './daily-arrests.component';

describe('DailyArrestsComponent', () => {
  let component: DailyArrestsComponent;
  let fixture: ComponentFixture<DailyArrestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyArrestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyArrestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
