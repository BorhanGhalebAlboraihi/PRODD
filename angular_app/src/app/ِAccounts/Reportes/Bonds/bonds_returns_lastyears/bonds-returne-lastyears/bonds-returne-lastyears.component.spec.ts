import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondsReturneLastyearsComponent } from './bonds-returne-lastyears.component';

describe('BondsReturneLastyearsComponent', () => {
  let component: BondsReturneLastyearsComponent;
  let fixture: ComponentFixture<BondsReturneLastyearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondsReturneLastyearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondsReturneLastyearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
