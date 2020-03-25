import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoniterMoveAccountComponent } from './moniter-move-account.component';

describe('MoniterMoveAccountComponent', () => {
  let component: MoniterMoveAccountComponent;
  let fixture: ComponentFixture<MoniterMoveAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoniterMoveAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoniterMoveAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
