import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionOrdersComponent } from './conversion-orders.component';

describe('ConversionOrdersComponent', () => {
  let component: ConversionOrdersComponent;
  let fixture: ComponentFixture<ConversionOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversionOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
