import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookHolderListComponent } from './book-holder-list.component';

describe('BookHolderListComponent', () => {
  let component: BookHolderListComponent;
  let fixture: ComponentFixture<BookHolderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookHolderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookHolderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
