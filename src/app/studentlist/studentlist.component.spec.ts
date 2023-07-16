import { ComponentFixture, TestBed } from '@angular/core/testing';

import { studentlistComponent } from './studentlist.component';

describe('StudentlistComponent', () => {
  let component: studentlistComponent;
  let fixture: ComponentFixture<studentlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ studentlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(studentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
