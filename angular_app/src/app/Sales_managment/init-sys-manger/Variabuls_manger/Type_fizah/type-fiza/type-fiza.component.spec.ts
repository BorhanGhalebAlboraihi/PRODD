import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeFizaComponent } from './type-fiza.component';

describe('TypeFizaComponent', () => {
  let component: TypeFizaComponent;
  let fixture: ComponentFixture<TypeFizaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeFizaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeFizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
