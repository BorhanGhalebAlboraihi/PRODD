import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreLocksComponent } from './store-locks.component';

describe('StoreLocksComponent', () => {
  let component: StoreLocksComponent;
  let fixture: ComponentFixture<StoreLocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreLocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreLocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
