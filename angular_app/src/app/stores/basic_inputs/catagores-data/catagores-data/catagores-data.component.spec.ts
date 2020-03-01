import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoresDataComponent } from './catagores-data.component';

describe('CatagoresDataComponent', () => {
  let component: CatagoresDataComponent;
  let fixture: ComponentFixture<CatagoresDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatagoresDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatagoresDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
