import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomptChacksComponent } from './accompt-chacks.component';

describe('AccomptChacksComponent', () => {
  let component: AccomptChacksComponent;
  let fixture: ComponentFixture<AccomptChacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccomptChacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomptChacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
