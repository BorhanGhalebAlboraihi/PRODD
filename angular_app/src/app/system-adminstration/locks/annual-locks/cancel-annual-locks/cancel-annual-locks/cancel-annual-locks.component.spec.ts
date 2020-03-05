import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelAnnualLocksComponent } from './cancel-annual-locks.component';

describe('CancelAnnualLocksComponent', () => {
  let component: CancelAnnualLocksComponent;
  let fixture: ComponentFixture<CancelAnnualLocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelAnnualLocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelAnnualLocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
