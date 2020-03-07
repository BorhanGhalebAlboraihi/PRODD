import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreedAccountComponent } from './screed-account.component';

describe('ScreedAccountComponent', () => {
  let component: ScreedAccountComponent;
  let fixture: ComponentFixture<ScreedAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreedAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreedAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
