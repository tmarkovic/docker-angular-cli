import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Headers } from '@angular/http';
import { User } from './app.component';
@Injectable()
export class PeopleService {
  API_URL: string = 'http://localhost:3000';
  headers = new Headers();
  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/json');
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get(`${this.API_URL}/users`).map(res => <User[]>res.json());
  }

  createUser(user: User) {
    let payload: string = JSON.stringify(user)
    return this.http.post(`${this.API_URL}/users`, payload, { headers: this.headers }).map(res => res.json())
  }
}
