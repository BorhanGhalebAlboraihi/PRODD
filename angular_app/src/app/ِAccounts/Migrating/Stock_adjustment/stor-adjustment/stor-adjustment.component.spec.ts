import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorAdjustmentComponent } from './stor-adjustment.component';

describe('StorAdjustmentComponent', () => {
  let component: StorAdjustmentComponent;
  let fixture: ComponentFixture<StorAdjustmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorAdjustmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorAdjustmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
