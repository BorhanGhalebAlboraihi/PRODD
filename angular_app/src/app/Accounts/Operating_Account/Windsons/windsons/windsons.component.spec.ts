import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindsonsComponent } from './windsons.component';

describe('WindsonsComponent', () => {
  let component: WindsonsComponent;
  let fixture: ComponentFixture<WindsonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindsonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindsonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
