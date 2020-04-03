import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrationConstDayesComponent } from './migration-const-dayes.component';

describe('MigrationConstDayesComponent', () => {
  let component: MigrationConstDayesComponent;
  let fixture: ComponentFixture<MigrationConstDayesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MigrationConstDayesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrationConstDayesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
