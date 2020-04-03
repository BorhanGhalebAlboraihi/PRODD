import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmediateReturnsComponent } from './immediate-returns.component';

describe('ImmediateReturnsComponent', () => {
  let component: ImmediateReturnsComponent;
  let fixture: ComponentFixture<ImmediateReturnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmediateReturnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmediateReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
