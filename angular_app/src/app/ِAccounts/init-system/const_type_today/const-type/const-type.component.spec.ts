import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstTypeComponent } from './const-type.component';

describe('ConstTypeComponent', () => {
  let component: ConstTypeComponent;
  let fixture: ComponentFixture<ConstTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
