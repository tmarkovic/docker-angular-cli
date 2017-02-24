import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people-service.service';
import { FormControl, FormGroup } from '@angular/forms';


export class User {
  name: string;
  birthday: string;
  phone: string;
  sex: Number;
  age: Number;
  _id?: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  people: {}[];
  sex: string[] = ['Man', 'Kvinna', 'Annat'];
  form = new FormGroup({
    name: new FormControl(),
    birthday: new FormControl(),
    phone: new FormControl(),
    sex: new FormControl(),
  });
  constructor(private userService: PeopleService) {

  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(res => this.people = res);
  }

  createPerson(e: Event) {
    e.preventDefault();
    let usr: User = new User();



    usr.name = this.form.controls['name'].value;
    usr.phone = this.form.controls['phone'].value;
    usr.birthday = this.form.controls['birthday'].value;
    usr.age = 23;
    usr.sex = 3;

    this.userService.createUser(usr).subscribe(res => {

      this.people.push(usr);

    },
      err => {
        console.log(err);
      });
  }
}
