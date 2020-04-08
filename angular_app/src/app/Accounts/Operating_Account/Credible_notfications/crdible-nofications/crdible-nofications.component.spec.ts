import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrdibleNoficationsComponent } from './crdible-nofications.component';

describe('CrdibleNoficationsComponent', () => {
  let component: CrdibleNoficationsComponent;
  let fixture: ComponentFixture<CrdibleNoficationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrdibleNoficationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrdibleNoficationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
