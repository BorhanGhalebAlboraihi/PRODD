import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrossProfitMarginComponent } from './gross-profit-margin.component';

describe('GrossProfitMarginComponent', () => {
  let component: GrossProfitMarginComponent;
  let fixture: ComponentFixture<GrossProfitMarginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrossProfitMarginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrossProfitMarginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
