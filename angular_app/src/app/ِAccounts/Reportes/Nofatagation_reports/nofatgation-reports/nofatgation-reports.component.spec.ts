import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NofatgationReportsComponent } from './nofatgation-reports.component';

describe('NofatgationReportsComponent', () => {
  let component: NofatgationReportsComponent;
  let fixture: ComponentFixture<NofatgationReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NofatgationReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NofatgationReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
