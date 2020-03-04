import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingRequestsComponent } from './buying-requests.component';

describe('BuyingRequestsComponent', () => {
  let component: BuyingRequestsComponent;
  let fixture: ComponentFixture<BuyingRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyingRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyingRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
