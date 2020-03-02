import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaardManuallyComponent } from './jaard-manually.component';

describe('JaardManuallyComponent', () => {
  let component: JaardManuallyComponent;
  let fixture: ComponentFixture<JaardManuallyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaardManuallyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaardManuallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
