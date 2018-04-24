import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryViewerComponent } from './directory-viewer.component';

describe('DirectoryViewerComponent', () => {
  let component: DirectoryViewerComponent;
  let fixture: ComponentFixture<DirectoryViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectoryViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
