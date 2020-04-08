import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiChecksComponent } from './multi-checks.component';

describe('MultiChecksComponent', () => {
  let component: MultiChecksComponent;
  let fixture: ComponentFixture<MultiChecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiChecksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiChecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
