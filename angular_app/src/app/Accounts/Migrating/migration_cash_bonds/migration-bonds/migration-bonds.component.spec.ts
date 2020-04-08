import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrationBondsComponent } from './migration-bonds.component';

describe('MigrationBondsComponent', () => {
  let component: MigrationBondsComponent;
  let fixture: ComponentFixture<MigrationBondsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MigrationBondsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrationBondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
