import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotationRateComponent } from './rotation-rate.component';

describe('RotationRateComponent', () => {
  let component: RotationRateComponent;
  let fixture: ComponentFixture<RotationRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotationRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotationRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
