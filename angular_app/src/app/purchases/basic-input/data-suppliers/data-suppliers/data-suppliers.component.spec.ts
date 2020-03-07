import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSuppliersComponent } from './data-suppliers.component';

describe('DataSuppliersComponent', () => {
  let component: DataSuppliersComponent;
  let fixture: ComponentFixture<DataSuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSuppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
