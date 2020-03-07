import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VarsAccontComponent } from './vars-accont.component';

describe('VarsAccontComponent', () => {
  let component: VarsAccontComponent;
  let fixture: ComponentFixture<VarsAccontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VarsAccontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VarsAccontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
