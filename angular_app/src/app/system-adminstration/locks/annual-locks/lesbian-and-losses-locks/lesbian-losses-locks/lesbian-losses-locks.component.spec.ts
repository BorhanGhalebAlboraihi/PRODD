import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LesbianLossesLocksComponent } from './lesbian-losses-locks.component';

describe('LesbianLossesLocksComponent', () => {
  let component: LesbianLossesLocksComponent;
  let fixture: ComponentFixture<LesbianLossesLocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LesbianLossesLocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LesbianLossesLocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
