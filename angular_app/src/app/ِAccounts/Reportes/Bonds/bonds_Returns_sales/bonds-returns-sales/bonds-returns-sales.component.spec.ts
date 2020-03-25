import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondsReturnsSalesComponent } from './bonds-returns-sales.component';

describe('BondsReturnsSalesComponent', () => {
  let component: BondsReturnsSalesComponent;
  let fixture: ComponentFixture<BondsReturnsSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondsReturnsSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondsReturnsSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
