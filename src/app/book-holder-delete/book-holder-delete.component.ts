import { Component, Inject, OnInit } from '@angular/core';
import {MyServiceService} from '../service/my-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-book-holder-delete',
  templateUrl: './book-holder-delete.component.html',
  styleUrls: ['./book-holder-delete.component.css']
})
export class BookHolderDeleteComponent implements OnInit {

  constructor(
    private service: MyServiceService,
    public dialogRef: MatDialogRef<BookHolderDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public deletedata: any) { }


  ngOnInit() {
      console.log(this.deletedata);
  }

  delete() {
    console.log(this.deletedata);
    this.service.deleteEmpoyleeData(this.deletedata).subscribe(
            data => this.closeDialog(data),
            error => this.closeDialog(error)
  );
}

     closeDialog(data) {
           console.log(data);
           this.dialogRef.close(data);
     }
}
