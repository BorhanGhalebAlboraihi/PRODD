import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRemburseReportComponent } from './customer-remburse-report.component';

describe('CustomerRemburseReportComponent', () => {
  let component: CustomerRemburseReportComponent;
  let fixture: ComponentFixture<CustomerRemburseReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerRemburseReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRemburseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
