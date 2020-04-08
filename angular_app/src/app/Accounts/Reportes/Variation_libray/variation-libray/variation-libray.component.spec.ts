import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariationLibrayComponent } from './variation-libray.component';

describe('VariationLibrayComponent', () => {
  let component: VariationLibrayComponent;
  let fixture: ComponentFixture<VariationLibrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariationLibrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariationLibrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
