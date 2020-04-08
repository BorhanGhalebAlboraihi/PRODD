import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderTodayBondsComponent } from './folder-today-bonds.component';

describe('FolderTodayBondsComponent', () => {
  let component: FolderTodayBondsComponent;
  let fixture: ComponentFixture<FolderTodayBondsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolderTodayBondsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderTodayBondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
