import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private appService: DataService) { }
  peoples;
  people_length;

  ngOnInit() {
    this.getCalenderListService();
  }


getCalenderListService() {
  this.appService.updateissueData.subscribe(
  data => this.checkDataStatus(data),
  );
}

checkDataStatus(data) {
    console.log(data);
    this.peoples = data;
    this.people_length = this.peoples.length;
}

}
