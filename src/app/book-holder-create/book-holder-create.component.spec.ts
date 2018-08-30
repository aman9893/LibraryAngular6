import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookHolderCreateComponent } from './book-holder-create.component';

describe('BookHolderCreateComponent', () => {
  let component: BookHolderCreateComponent;
  let fixture: ComponentFixture<BookHolderCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookHolderCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookHolderCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
