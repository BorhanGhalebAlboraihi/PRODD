import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveBoxsComponent } from './move-boxs.component';

describe('MoveBoxsComponent', () => {
  let component: MoveBoxsComponent;
  let fixture: ComponentFixture<MoveBoxsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveBoxsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveBoxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
