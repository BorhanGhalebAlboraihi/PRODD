import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesionsOfarrestsComponent } from './tesions-ofarrests.component';

describe('TesionsOfarrestsComponent', () => {
  let component: TesionsOfarrestsComponent;
  let fixture: ComponentFixture<TesionsOfarrestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesionsOfarrestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesionsOfarrestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
