import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralTodayComponent } from './general-today.component';

describe('GeneralTodayComponent', () => {
  let component: GeneralTodayComponent;
  let fixture: ComponentFixture<GeneralTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
