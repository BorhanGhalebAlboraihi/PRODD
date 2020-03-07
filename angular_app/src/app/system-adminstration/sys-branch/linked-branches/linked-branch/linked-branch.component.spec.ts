import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedBranchComponent } from './linked-branch.component';

describe('LinkedBranchComponent', () => {
  let component: LinkedBranchComponent;
  let fixture: ComponentFixture<LinkedBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
