import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxsAccountComponent } from './boxs-account.component';

describe('BoxsAccountComponent', () => {
  let component: BoxsAccountComponent;
  let fixture: ComponentFixture<BoxsAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxsAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxsAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
