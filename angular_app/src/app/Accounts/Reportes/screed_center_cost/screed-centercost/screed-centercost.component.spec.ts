import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreedCentercostComponent } from './screed-centercost.component';

describe('ScreedCentercostComponent', () => {
  let component: ScreedCentercostComponent;
  let fixture: ComponentFixture<ScreedCentercostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreedCentercostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreedCentercostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
