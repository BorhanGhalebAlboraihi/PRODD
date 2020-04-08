import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBondsComponent } from './check-bonds.component';

describe('CheckBondsComponent', () => {
  let component: CheckBondsComponent;
  let fixture: ComponentFixture<CheckBondsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckBondsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
