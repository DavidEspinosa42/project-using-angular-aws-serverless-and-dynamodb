import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAuthorDialogComponent } from './add-author-dialog.component';

describe('AddAuthorDialogComponent', () => {
  let component: AddAuthorDialogComponent;
  let fixture: ComponentFixture<AddAuthorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAuthorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAuthorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
