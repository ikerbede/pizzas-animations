import { Component, Input } from '@angular/core';
import { Pizza } from '../pizza/pizza.model';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css'],
})
export class PizzaDetailsComponent {
  @Input() pizza!: Pizza;
}
