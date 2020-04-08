import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondsNsgedReportsComponent } from './bonds-nsged-reports.component';

describe('BondsNsgedReportsComponent', () => {
  let component: BondsNsgedReportsComponent;
  let fixture: ComponentFixture<BondsNsgedReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondsNsgedReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondsNsgedReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
