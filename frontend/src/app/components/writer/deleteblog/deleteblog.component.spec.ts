import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteblogComponent } from './deleteblog.component';

describe('DeleteblogComponent', () => {
  let component: DeleteblogComponent;
  let fixture: ComponentFixture<DeleteblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
