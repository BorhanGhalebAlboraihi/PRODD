import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatacorytypeComponent } from './catacorytype.component';

describe('CatacorytypeComponent', () => {
  let component: CatacorytypeComponent;
  let fixture: ComponentFixture<CatacorytypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatacorytypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatacorytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
