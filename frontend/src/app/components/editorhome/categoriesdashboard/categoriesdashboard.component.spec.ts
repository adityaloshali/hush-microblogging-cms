import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesdashboardComponent } from './categoriesdashboard.component';

describe('CategoriesdashboardComponent', () => {
  let component: CategoriesdashboardComponent;
  let fixture: ComponentFixture<CategoriesdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
