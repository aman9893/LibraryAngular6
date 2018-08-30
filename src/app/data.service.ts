import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject , Subject, ReplaySubject } from 'rxjs';
@Injectable()
export class DataService {

  private updateLabelValue = new BehaviorSubject<string>('');
  updateissueData = this.updateLabelValue.asObservable();
  updateissueDataList(message: string) {
  this.updateLabelValue.next(message);

  console.log(this.updateLabelValue);
 }

}
