import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientificCataComponent } from './scientific-cata.component';

describe('ScientificCataComponent', () => {
  let component: ScientificCataComponent;
  let fixture: ComponentFixture<ScientificCataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScientificCataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScientificCataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
