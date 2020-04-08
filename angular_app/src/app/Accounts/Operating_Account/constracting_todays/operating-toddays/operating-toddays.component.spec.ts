import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatingToddaysComponent } from './operating-toddays.component';

describe('OperatingToddaysComponent', () => {
  let component: OperatingToddaysComponent;
  let fixture: ComponentFixture<OperatingToddaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatingToddaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatingToddaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
