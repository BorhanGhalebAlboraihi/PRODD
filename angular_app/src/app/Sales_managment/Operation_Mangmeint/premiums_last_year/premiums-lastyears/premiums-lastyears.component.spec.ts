import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumsLastyearsComponent } from './premiums-lastyears.component';

describe('PremiumsLastyearsComponent', () => {
  let component: PremiumsLastyearsComponent;
  let fixture: ComponentFixture<PremiumsLastyearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumsLastyearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumsLastyearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
