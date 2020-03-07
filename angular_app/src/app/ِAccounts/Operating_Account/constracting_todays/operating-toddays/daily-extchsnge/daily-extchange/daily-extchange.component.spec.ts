import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyExtchangeComponent } from './daily-extchange.component';

describe('DailyExtchangeComponent', () => {
  let component: DailyExtchangeComponent;
  let fixture: ComponentFixture<DailyExtchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyExtchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyExtchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
