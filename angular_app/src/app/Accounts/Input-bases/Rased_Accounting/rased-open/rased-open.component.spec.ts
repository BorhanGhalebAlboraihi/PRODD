import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RasedOpenComponent } from './rased-open.component';

describe('RasedOpenComponent', () => {
  let component: RasedOpenComponent;
  let fixture: ComponentFixture<RasedOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RasedOpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RasedOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
