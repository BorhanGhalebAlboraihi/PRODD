import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsSignaturesComponent } from './reports-signatures.component';

describe('ReportsSignaturesComponent', () => {
  let component: ReportsSignaturesComponent;
  let fixture: ComponentFixture<ReportsSignaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsSignaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsSignaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
