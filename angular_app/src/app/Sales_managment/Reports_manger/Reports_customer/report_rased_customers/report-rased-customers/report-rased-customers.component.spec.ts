import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportRasedCustomersComponent } from './report-rased-customers.component';

describe('ReportRasedCustomersComponent', () => {
  let component: ReportRasedCustomersComponent;
  let fixture: ComponentFixture<ReportRasedCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportRasedCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportRasedCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
