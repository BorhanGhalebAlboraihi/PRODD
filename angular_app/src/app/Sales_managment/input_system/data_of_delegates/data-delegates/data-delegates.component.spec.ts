import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDelegatesComponent } from './data-delegates.component';

describe('DataDelegatesComponent', () => {
  let component: DataDelegatesComponent;
  let fixture: ComponentFixture<DataDelegatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDelegatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDelegatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
