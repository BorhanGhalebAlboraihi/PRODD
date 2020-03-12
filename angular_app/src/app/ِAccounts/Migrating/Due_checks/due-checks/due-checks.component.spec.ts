import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DueChecksComponent } from './due-checks.component';

describe('DueChecksComponent', () => {
  let component: DueChecksComponent;
  let fixture: ComponentFixture<DueChecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DueChecksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DueChecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
