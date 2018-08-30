import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormsModule, FormControl,
  Validators, FormBuilder } from '@angular/forms';
import {  Input, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {MyServiceService} from '../service/my-service.service';
@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private service: MyServiceService,
    public dialogRef: MatDialogRef<CreateBookComponent>,
    @Inject(MAT_DIALOG_DATA) public Newdata: any) { }

    contactForm: FormGroup;
  ngOnInit() {
    this.createForm();
        }
      private createForm() {
         this.contactForm = this.formBuilder.group({
          book_name: new FormControl('', {
            validators: [Validators.required, Validators.maxLength(55)],
            updateOn: 'change'
          }),
          book_number: new FormControl(''),
          empolyee_name: new FormControl(''),
          auther: new FormControl(''),
        });
      }
      getError() {
         return '*This is required field';
                 }

      onSubmit() {
        if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      const  formData = {
         book_name     :   this.contactForm.controls ['book_name'].value,
         book_number    :   this.contactForm.controls ['book_number'].value,
         empolyee_name  :   this.contactForm.controls ['empolyee_name'].value,
         auther         :   this.contactForm.controls ['auther'].value,                  };

        this.service.postBookData(formData).subscribe(
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

