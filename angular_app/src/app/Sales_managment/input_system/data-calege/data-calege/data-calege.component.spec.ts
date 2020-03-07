import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCalegeComponent } from './data-calege.component';

describe('DataCalegeComponent', () => {
  let component: DataCalegeComponent;
  let fixture: ComponentFixture<DataCalegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataCalegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCalegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
