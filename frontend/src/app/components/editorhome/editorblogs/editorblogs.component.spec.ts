import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorblogsComponent } from './editorblogs.component';

describe('EditorblogsComponent', () => {
  let component: EditorblogsComponent;
  let fixture: ComponentFixture<EditorblogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorblogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
