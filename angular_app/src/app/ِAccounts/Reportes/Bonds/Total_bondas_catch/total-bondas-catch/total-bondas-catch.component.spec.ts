import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalBondasCatchComponent } from './total-bondas-catch.component';

describe('TotalBondasCatchComponent', () => {
  let component: TotalBondasCatchComponent;
  let fixture: ComponentFixture<TotalBondasCatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalBondasCatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalBondasCatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
