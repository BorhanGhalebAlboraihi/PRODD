import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayingStoresComponent } from './displaying-stores.component';

describe('DisplayingStoresComponent', () => {
  let component: DisplayingStoresComponent;
  let fixture: ComponentFixture<DisplayingStoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayingStoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayingStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
