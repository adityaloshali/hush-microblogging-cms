import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorhomeComponent } from './editorhome.component';

describe('EditorhomeComponent', () => {
  let component: EditorhomeComponent;
  let fixture: ComponentFixture<EditorhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
