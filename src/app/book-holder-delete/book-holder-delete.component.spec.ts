import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookHolderDeleteComponent } from './book-holder-delete.component';

describe('BookHolderDeleteComponent', () => {
  let component: BookHolderDeleteComponent;
  let fixture: ComponentFixture<BookHolderDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookHolderDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookHolderDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
