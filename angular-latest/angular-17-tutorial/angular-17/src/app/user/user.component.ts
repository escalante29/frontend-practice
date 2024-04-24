import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  // template: `
  //   @for(user of users; track user.id) {
  //     <p>{{user.name}}</p>
  //   }
  // `,
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = 'Charlie';
  @Input() greeting = '';
  // username = undefined;
}
