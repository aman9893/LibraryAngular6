import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {MyServiceService} from '../service/my-service.service';
import {CreateBookComponent} from '../create-book/create-book.component';
import {DeleteBookComponent} from '../delete-book/delete-book.component';
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {


  constructor(private service: MyServiceService,
    public dialog: MatDialog) {}
    bookslist;
    book_length;

  ngOnInit() {
    this.getBooksData();
  }

  createEmpDialog() {
    let dialogRef = this.dialog.open(CreateBookComponent,
       {
          width: '500px',
          height: '',
          data: 'aman',
          autoFocus: false
          });
          dialogRef.afterClosed().subscribe(result => {
          console.log(result);
          });
        }

     deleteEmpDialog(id) {
       let dialogRef = this.dialog.open(DeleteBookComponent,
           {
             width: '500px',
             height: '400px',
              data: id,
             autoFocus: false
                  });
         dialogRef.afterClosed().subscribe(result => {
        console.log(result);
                  });
            }
  getBooksData(): void {
    this.service
        .getBookList().subscribe(
        data => this.getBooksList(data),
        error => this.getBooksList(error)
      );
  }
  getBooksList(data) {
    this.bookslist = data;
    console.log(this.bookslist);
    this.book_length = this.bookslist.length;
    console.log(this.book_length);
  }
}
