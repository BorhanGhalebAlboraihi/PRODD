import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesYieldsComponent } from './sales-yields.component';

describe('SalesYieldsComponent', () => {
  let component: SalesYieldsComponent;
  let fixture: ComponentFixture<SalesYieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesYieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesYieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
