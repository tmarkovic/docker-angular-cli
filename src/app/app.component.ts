import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  people: {}[];
  sex:[] = ['Mann', 'Kvinna', 'Annat'];

  constructor(private userService: PeopleService) {

  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(res => this.people = res);
  }
}
