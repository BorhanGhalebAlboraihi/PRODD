import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondsBanksComponent } from './bonds-banks.component';

describe('BondsBanksComponent', () => {
  let component: BondsBanksComponent;
  let fixture: ComponentFixture<BondsBanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondsBanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondsBanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
