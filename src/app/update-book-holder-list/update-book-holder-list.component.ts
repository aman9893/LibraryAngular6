import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormsModule, FormControl,
  Validators, FormBuilder } from '@angular/forms';
import {  Input, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {MyServiceService} from '../service/my-service.service';
@Component({
  selector: 'app-update-book-holder-list',
  templateUrl: './update-book-holder-list.component.html',
  styleUrls: ['./update-book-holder-list.component.css']
})
export class UpdateBookHolderListComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private service: MyServiceService,
    public dialogRef: MatDialogRef<UpdateBookHolderListComponent>,
    @Inject(MAT_DIALOG_DATA) public Newdata: any) { }

contactForm: FormGroup;
   ngOnInit() {
     console.log(this.Newdata);
    this.createForm();
        }
 private createForm() {
    this.contactForm = this.formBuilder.group({
         emp_name: new FormControl('', {
         validators: [Validators.required, Validators.maxLength(55)],
          updateOn: 'change'
          }),
         bookstatus: new FormControl(false),
         book_number: new FormControl(''),
          phone: new FormControl(''),
         book_name: new FormControl(''),
         email: new FormControl(''),
         issue_date: new FormControl(''),
         return_date: new FormControl(''),
        });
        this.contactForm.controls['emp_name'].setValue(this.Newdata.emp_name),
        this.contactForm.controls['book_number'].setValue(this.Newdata.book_number),
        this.contactForm.controls['phone'].setValue(this.Newdata.phone),
        this.contactForm.controls['email'].setValue(this.Newdata.email),
        this.contactForm.controls['book_name'].setValue(this.Newdata.book_name),
        this.contactForm.controls['issue_date'].setValue(this.Newdata.date),
        this.contactForm.controls['return_date'].setValue(this.Newdata.return_date);
      }

      getError() {  return '*This is required field';
      }
    onSubmit() {
        if (this.contactForm.valid) {
        console.log(this.contactForm.value);
         const  formData = {
          emp_name  : this.contactForm.controls ['emp_name'].value,
          book_flag  : this.contactForm.controls ['bookstatus'].value,
          book_number  : this.contactForm.controls ['book_number'].value,
          date  :  this.contactForm.controls ['issue_date'].value,
          return_date  :   this.contactForm.controls ['return_date'].value,
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

