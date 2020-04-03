import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreedaccountingComponent } from './screedaccounting.component';

describe('ScreedaccountingComponent', () => {
  let component: ScreedaccountingComponent;
  let fixture: ComponentFixture<ScreedaccountingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreedaccountingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreedaccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
