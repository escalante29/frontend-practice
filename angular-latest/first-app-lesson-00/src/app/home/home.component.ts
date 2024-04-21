import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
    </section>
    `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  housingLocation: Housinglocation = {
    id: 9999,
    name: 'Apts Don Neko',
    city: 'Belen',
    state: 'HE',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: true,
  }
}
