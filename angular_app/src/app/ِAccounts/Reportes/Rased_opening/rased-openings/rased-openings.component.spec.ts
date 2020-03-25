import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RasedOpeningsComponent } from './rased-openings.component';

describe('RasedOpeningsComponent', () => {
  let component: RasedOpeningsComponent;
  let fixture: ComponentFixture<RasedOpeningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RasedOpeningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RasedOpeningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
