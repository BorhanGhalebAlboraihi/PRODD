import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenNewYearComponent } from './open-new-year.component';

describe('OpenNewYearComponent', () => {
  let component: OpenNewYearComponent;
  let fixture: ComponentFixture<OpenNewYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenNewYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenNewYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
