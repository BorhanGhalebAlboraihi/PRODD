import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaardReportsComponent } from './jaard-reports.component';

describe('JaardReportsComponent', () => {
  let component: JaardReportsComponent;
  let fixture: ComponentFixture<JaardReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaardReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaardReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
