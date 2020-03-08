import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportRequestCustomerComponent } from './report-request-customer.component';

describe('ReportRequestCustomerComponent', () => {
  let component: ReportRequestCustomerComponent;
  let fixture: ComponentFixture<ReportRequestCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportRequestCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportRequestCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
