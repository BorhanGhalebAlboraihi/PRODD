import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesInvoReportsComponent } from './sales-invo-reports.component';

describe('SalesInvoReportsComponent', () => {
  let component: SalesInvoReportsComponent;
  let fixture: ComponentFixture<SalesInvoReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesInvoReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesInvoReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
