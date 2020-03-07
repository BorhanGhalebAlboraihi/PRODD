import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YieldLastyearsComponent } from './yield-lastyears.component';

describe('YieldLastyearsComponent', () => {
  let component: YieldLastyearsComponent;
  let fixture: ComponentFixture<YieldLastyearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YieldLastyearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YieldLastyearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
