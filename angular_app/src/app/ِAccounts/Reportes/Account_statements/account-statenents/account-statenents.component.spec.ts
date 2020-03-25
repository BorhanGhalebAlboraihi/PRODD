import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountStatenentsComponent } from './account-statenents.component';

describe('AccountStatenentsComponent', () => {
  let component: AccountStatenentsComponent;
  let fixture: ComponentFixture<AccountStatenentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountStatenentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountStatenentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
