import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesBillsComponent } from './sales-bills.component';

describe('SalesBillsComponent', () => {
  let component: SalesBillsComponent;
  let fixture: ComponentFixture<SalesBillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesBillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
