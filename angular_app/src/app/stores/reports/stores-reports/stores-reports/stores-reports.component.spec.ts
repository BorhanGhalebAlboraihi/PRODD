import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresReportsComponent } from './stores-reports.component';

describe('StoresReportsComponent', () => {
  let component: StoresReportsComponent;
  let fixture: ComponentFixture<StoresReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoresReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
