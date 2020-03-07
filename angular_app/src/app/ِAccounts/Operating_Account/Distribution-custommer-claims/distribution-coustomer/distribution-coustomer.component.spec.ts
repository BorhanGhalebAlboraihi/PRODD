import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionCoustomerComponent } from './distribution-coustomer.component';

describe('DistributionCoustomerComponent', () => {
  let component: DistributionCoustomerComponent;
  let fixture: ComponentFixture<DistributionCoustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributionCoustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributionCoustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
