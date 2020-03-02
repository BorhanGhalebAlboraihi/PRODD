import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodPrintComponent } from './barcod-print.component';

describe('BarcodPrintComponent', () => {
  let component: BarcodPrintComponent;
  let fixture: ComponentFixture<BarcodPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarcodPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
