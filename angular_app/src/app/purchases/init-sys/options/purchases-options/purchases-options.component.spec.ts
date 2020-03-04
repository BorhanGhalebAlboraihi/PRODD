import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesOptionsComponent } from './purchases-options.component';

describe('PurchasesOptionsComponent', () => {
  let component: PurchasesOptionsComponent;
  let fixture: ComponentFixture<PurchasesOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasesOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasesOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
