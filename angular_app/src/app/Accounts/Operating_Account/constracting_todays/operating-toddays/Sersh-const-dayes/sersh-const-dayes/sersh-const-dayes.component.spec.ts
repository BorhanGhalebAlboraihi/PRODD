import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SershConstDayesComponent } from './sersh-const-dayes.component';

describe('SershConstDayesComponent', () => {
  let component: SershConstDayesComponent;
  let fixture: ComponentFixture<SershConstDayesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SershConstDayesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SershConstDayesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
