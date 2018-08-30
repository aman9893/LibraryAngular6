import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MyServiceService {

    constructor(private http: HttpClient) {}

    getPeople() {
      return this.http.get('http://localhost:4000/v1/employees');
    }

    getBookList() {
      return this.http.get('http://localhost:4000/v1/booksList');
    }
    postBookData(message) {
      return this.http.post('http://localhost:4000/v1/create_book', message);
    }

    postEmpoyleeData(message) {
      return this.http.post('http://localhost:4000/v1/create_empolyee', message);
    }
    deleteEmpoyleeData(id) {
      return this.http.delete('http://localhost:4000/v1/delete_empolyee' + '/' + id);
    }

  }
