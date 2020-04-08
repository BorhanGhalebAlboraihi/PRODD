import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountMadialComponent } from './account-madial.component';

describe('AccountMadialComponent', () => {
  let component: AccountMadialComponent;
  let fixture: ComponentFixture<AccountMadialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountMadialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountMadialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
