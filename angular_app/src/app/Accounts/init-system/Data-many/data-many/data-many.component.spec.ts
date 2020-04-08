import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataManyComponent } from './data-many.component';

describe('DataManyComponent', () => {
  let component: DataManyComponent;
  let fixture: ComponentFixture<DataManyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataManyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataManyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
