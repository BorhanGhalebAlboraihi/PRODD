import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningInventoryComponent } from './opening-inventory.component';

describe('OpeningInventoryComponent', () => {
  let component: OpeningInventoryComponent;
  let fixture: ComponentFixture<OpeningInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpeningInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
