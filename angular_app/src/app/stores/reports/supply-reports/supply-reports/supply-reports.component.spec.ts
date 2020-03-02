import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyReportsComponent } from './supply-reports.component';

describe('SupplyReportsComponent', () => {
  let component: SupplyReportsComponent;
  let fixture: ComponentFixture<SupplyReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
