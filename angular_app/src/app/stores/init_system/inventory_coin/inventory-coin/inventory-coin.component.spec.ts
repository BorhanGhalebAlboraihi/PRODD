import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryCoinComponent } from './inventory-coin.component';

describe('InventoryCoinComponent', () => {
  let component: InventoryCoinComponent;
  let fixture: ComponentFixture<InventoryCoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryCoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
