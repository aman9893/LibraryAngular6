import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  loginPage = true;
  regitserPage: boolean;

  ngOnInit() {
  }

  login () {
    this.loginPage = true;
    this.regitserPage = false;
  }
  register() {
    this.loginPage = false;
    this.regitserPage = !this.regitserPage;
  }


}
