import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  users: User[] = [{
    name:"Dennis"
  }]
}
export class User {
    name!: String;
}
