import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalsalloReportsComponent } from './balsallo-reports.component';

describe('BalsalloReportsComponent', () => {
  let component: BalsalloReportsComponent;
  let fixture: ComponentFixture<BalsalloReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalsalloReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalsalloReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
