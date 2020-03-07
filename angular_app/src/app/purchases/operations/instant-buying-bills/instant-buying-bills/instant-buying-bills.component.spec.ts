import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantBuyingBillsComponent } from './instant-buying-bills.component';

describe('InstantBuyingBillsComponent', () => {
  let component: InstantBuyingBillsComponent;
  let fixture: ComponentFixture<InstantBuyingBillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstantBuyingBillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstantBuyingBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
