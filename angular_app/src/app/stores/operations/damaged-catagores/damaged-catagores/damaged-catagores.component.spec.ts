import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamagedCatagoresComponent } from './damaged-catagores.component';

describe('DamagedCatagoresComponent', () => {
  let component: DamagedCatagoresComponent;
  let fixture: ComponentFixture<DamagedCatagoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamagedCatagoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamagedCatagoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
