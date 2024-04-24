import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    UserComponent
  ],
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
  // template:`
  //   Hello {{city}}!
  //   @if(isLoggedIn) {
  //     Welcome back, Friend!
  //   }
  //   @for(user of users; track user.id) {
  //     <p>{{user.name}}</p>
  //   }
  // `,
  styles: `
  :host {
    color: #a144eb;
  }
`,
})
export class AppComponent {
  msg = 'Hello Universe';
  city = 'Heredia!';
  isLoggedIn = true;
  users = [{id: 0, name: 'Sarah'}, {id: 1, name: 'Amy'}, {id: 2, name: 'Rachel'}, {id: 3, name: 'Jessica'}, {id: 4, name: 'Poornima'}];
  isEditable = true;
  greeting = 'Bon Jour ';

  greet(name: string) {
    console.log(name); 
    alert(`Hello ${name}!`);
  }
}
