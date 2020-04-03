import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnsExchangOrdersComponent } from './returns-exchang-orders.component';

describe('ReturnsExchangOrdersComponent', () => {
  let component: ReturnsExchangOrdersComponent;
  let fixture: ComponentFixture<ReturnsExchangOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnsExchangOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnsExchangOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
