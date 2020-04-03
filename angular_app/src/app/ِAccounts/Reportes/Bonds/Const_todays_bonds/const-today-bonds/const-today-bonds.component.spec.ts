import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstTodayBondsComponent } from './const-today-bonds.component';

describe('ConstTodayBondsComponent', () => {
  let component: ConstTodayBondsComponent;
  let fixture: ComponentFixture<ConstTodayBondsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstTodayBondsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstTodayBondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
