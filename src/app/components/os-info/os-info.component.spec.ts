import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsInfoComponent } from './os-info.component';

describe('OsInfoComponent', () => {
  let component: OsInfoComponent;
  let fixture: ComponentFixture<OsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
