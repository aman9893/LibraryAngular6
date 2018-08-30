import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookHolderComponent } from './book-holder.component';

describe('BookHolderComponent', () => {
  let component: BookHolderComponent;
  let fixture: ComponentFixture<BookHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
