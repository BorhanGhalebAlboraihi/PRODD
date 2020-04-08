import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibaryGeneralnessComponent } from './libary-generalness.component';

describe('LibaryGeneralnessComponent', () => {
  let component: LibaryGeneralnessComponent;
  let fixture: ComponentFixture<LibaryGeneralnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibaryGeneralnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibaryGeneralnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
