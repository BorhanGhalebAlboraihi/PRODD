import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsScreedCostsComponent } from './reports-screed-costs.component';

describe('ReportsScreedCostsComponent', () => {
  let component: ReportsScreedCostsComponent;
  let fixture: ComponentFixture<ReportsScreedCostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsScreedCostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsScreedCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
