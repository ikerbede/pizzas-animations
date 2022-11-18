import { Component, Input } from '@angular/core';
import { Pizza } from '../pizza/pizza.model';

@Component({
  selector: 'app-pizza-main',
  templateUrl: './pizza-main.component.html',
  styleUrls: ['./pizza-main.component.css'],
})
export class PizzaMainComponent {
  @Input() pizza!: Pizza;
}
