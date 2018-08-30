import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBookHolderListComponent } from './update-book-holder-list.component';

describe('UpdateBookHolderListComponent', () => {
  let component: UpdateBookHolderListComponent;
  let fixture: ComponentFixture<UpdateBookHolderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBookHolderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBookHolderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
