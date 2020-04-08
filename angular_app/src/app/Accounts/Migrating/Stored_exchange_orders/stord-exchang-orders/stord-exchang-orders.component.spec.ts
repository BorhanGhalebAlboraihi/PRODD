import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StordExchangOrdersComponent } from './stord-exchang-orders.component';

describe('StordExchangOrdersComponent', () => {
  let component: StordExchangOrdersComponent;
  let fixture: ComponentFixture<StordExchangOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StordExchangOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StordExchangOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
