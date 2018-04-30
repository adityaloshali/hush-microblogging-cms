import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoreditComponent } from './editoredit.component';

describe('EditoreditComponent', () => {
  let component: EditoreditComponent;
  let fixture: ComponentFixture<EditoreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditoreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditoreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
