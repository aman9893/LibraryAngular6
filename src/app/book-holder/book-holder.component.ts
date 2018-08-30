import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormsModule, FormControl,
  Validators, FormBuilder } from '@angular/forms';
import {  Input, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MyServiceService} from '../service/my-service.service';
@Component({
  selector: 'app-book-holder',
  templateUrl: './book-holder.component.html',
  styleUrls: ['./book-holder.component.css']
})
export class BookHolderComponent implements OnInit {

  constructor(
     private formBuilder: FormBuilder,
    private service: MyServiceService,
    public dialogRef: MatDialogRef<BookHolderComponent>,
    @Inject(MAT_DIALOG_DATA) public updatedata: any) { }

 contactForm: FormGroup;

  ngOnInit() {
    this.createForm();
     console.log(this.updatedata);
    }

     private createForm() {
        this.contactForm = this.formBuilder.group({
            bookstatus: new FormControl(this.updatedata.book_flag, {
              validators: [Validators.required],
               updateOn: 'change'
               })
              });
          }
     getError() {  return '*This is required field';
     }
        onSubmit() {
            if (this.contactForm.valid) {
            console.log(this.contactForm.value);
             const  formData = {
              book_flag  : this.contactForm.controls ['bookstatus'].value
             };
            this.service.postEmpoyleeData(formData).subscribe(
              data => this.closeDialog(data),
              error => this.closeDialog(error)
          );
        }

         this.contactForm.reset();
       }
         closeDialog(data) {
             console.log(data);
            this.dialogRef.close(data);
       }
}
