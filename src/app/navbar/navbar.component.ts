import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(  public dialog: MatDialog) { }

  ngOnInit() {
  }
  loginDialog() {
    let dialogRef = this.dialog.open(LoginComponent,
       {
          width: '600px',
          height: '',
          data: 'aman',
          autoFocus: false
          });
          dialogRef.afterClosed().subscribe(result => {
          console.log(result);
          });
        }
}
