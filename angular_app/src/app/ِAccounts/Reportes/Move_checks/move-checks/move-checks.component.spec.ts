import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveChecksComponent } from './move-checks.component';

describe('MoveChecksComponent', () => {
  let component: MoveChecksComponent;
  let fixture: ComponentFixture<MoveChecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveChecksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveChecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
