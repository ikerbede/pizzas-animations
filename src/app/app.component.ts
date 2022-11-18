import { Component } from '@angular/core';
import { Pizza } from './pizza/pizza.model';
import { PIZZAS } from './pizzas.constant';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pizzas: readonly Pizza[] = PIZZAS;
}
