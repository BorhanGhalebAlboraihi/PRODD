import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativeCataComponent } from './alternative-cata.component';

describe('AlternativeCataComponent', () => {
  let component: AlternativeCataComponent;
  let fixture: ComponentFixture<AlternativeCataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternativeCataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternativeCataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
