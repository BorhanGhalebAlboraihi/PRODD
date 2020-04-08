import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalesReturnsComponent } from './scales-returns.component';

describe('ScalesReturnsComponent', () => {
  let component: ScalesReturnsComponent;
  let fixture: ComponentFixture<ScalesReturnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScalesReturnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScalesReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
