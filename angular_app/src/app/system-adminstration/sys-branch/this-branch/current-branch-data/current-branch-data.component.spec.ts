import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentBranchDataComponent } from './current-branch-data.component';

describe('CurrentBranchDataComponent', () => {
  let component: CurrentBranchDataComponent;
  let fixture: ComponentFixture<CurrentBranchDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentBranchDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentBranchDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
