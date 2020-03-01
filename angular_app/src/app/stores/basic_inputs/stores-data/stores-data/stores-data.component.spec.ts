import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresDataComponent } from './stores-data.component';

describe('StoresDataComponent', () => {
  let component: StoresDataComponent;
  let fixture: ComponentFixture<StoresDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoresDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
