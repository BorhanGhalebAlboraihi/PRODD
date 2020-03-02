import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyStoresComponent } from './supply-stores.component';

describe('SupplyStoresComponent', () => {
  let component: SupplyStoresComponent;
  let fixture: ComponentFixture<SupplyStoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyStoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
