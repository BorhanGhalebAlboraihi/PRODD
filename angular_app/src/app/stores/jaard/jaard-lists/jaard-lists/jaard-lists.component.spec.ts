import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaardListsComponent } from './jaard-lists.component';

describe('JaardListsComponent', () => {
  let component: JaardListsComponent;
  let fixture: ComponentFixture<JaardListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaardListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaardListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
