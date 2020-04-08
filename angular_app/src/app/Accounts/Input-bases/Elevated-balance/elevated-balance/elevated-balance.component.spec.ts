import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevatedBalanceComponent } from './elevated-balance.component';

describe('ElevatedBalanceComponent', () => {
  let component: ElevatedBalanceComponent;
  let fixture: ComponentFixture<ElevatedBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElevatedBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevatedBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
