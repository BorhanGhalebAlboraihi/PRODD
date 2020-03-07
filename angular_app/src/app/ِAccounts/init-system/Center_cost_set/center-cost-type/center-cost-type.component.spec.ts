import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterCostTypeComponent } from './center-cost-type.component';

describe('CenterCostTypeComponent', () => {
  let component: CenterCostTypeComponent;
  let fixture: ComponentFixture<CenterCostTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterCostTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterCostTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
