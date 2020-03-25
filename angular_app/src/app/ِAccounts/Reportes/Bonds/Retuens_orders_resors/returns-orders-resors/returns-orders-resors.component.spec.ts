import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnsOrdersResorsComponent } from './returns-orders-resors.component';

describe('ReturnsOrdersResorsComponent', () => {
  let component: ReturnsOrdersResorsComponent;
  let fixture: ComponentFixture<ReturnsOrdersResorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnsOrdersResorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnsOrdersResorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
