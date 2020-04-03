import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnsLastYearsComponent } from './returns-last-years.component';

describe('ReturnsLastYearsComponent', () => {
  let component: ReturnsLastYearsComponent;
  let fixture: ComponentFixture<ReturnsLastYearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnsLastYearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnsLastYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
