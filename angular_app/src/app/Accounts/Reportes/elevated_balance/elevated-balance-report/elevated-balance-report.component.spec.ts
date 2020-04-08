import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevatedBalanceReportComponent } from './elevated-balance-report.component';

describe('ElevatedBalanceReportComponent', () => {
  let component: ElevatedBalanceReportComponent;
  let fixture: ComponentFixture<ElevatedBalanceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElevatedBalanceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevatedBalanceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
