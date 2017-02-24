import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
@Injectable()
export class PeopleService {
  API_URL: string = 'http://localhost:3000';

  constructor(private http: Http) {

  }

  getAllUsers(): Observable<{}[]> {
    return this.http.get(`${this.API_URL}/users`).map(res => res.json());
  }


}
