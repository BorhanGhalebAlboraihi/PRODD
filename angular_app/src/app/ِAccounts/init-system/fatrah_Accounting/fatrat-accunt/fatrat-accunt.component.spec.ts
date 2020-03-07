import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatratAccuntComponent } from './fatrat-accunt.component';

describe('FatratAccuntComponent', () => {
  let component: FatratAccuntComponent;
  let fixture: ComponentFixture<FatratAccuntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatratAccuntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatratAccuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
