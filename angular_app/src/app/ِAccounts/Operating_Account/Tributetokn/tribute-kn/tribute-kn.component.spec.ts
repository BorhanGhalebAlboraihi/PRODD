import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TributeKnComponent } from './tribute-kn.component';

describe('TributeKnComponent', () => {
  let component: TributeKnComponent;
  let fixture: ComponentFixture<TributeKnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TributeKnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TributeKnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
