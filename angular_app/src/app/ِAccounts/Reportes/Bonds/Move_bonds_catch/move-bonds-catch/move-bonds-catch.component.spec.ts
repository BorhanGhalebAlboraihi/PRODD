import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveBondsCatchComponent } from './move-bonds-catch.component';

describe('MoveBondsCatchComponent', () => {
  let component: MoveBondsCatchComponent;
  let fixture: ComponentFixture<MoveBondsCatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveBondsCatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveBondsCatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
