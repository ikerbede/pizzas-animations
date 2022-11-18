import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Pizza } from './pizza.model';

@Component({
  selector: 'app-pizza',
  templateUrl: 'pizza.component.html',
  styleUrls: ['pizza.component.css'],
  animations: [
    trigger('displayDetails', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'scale(0.6)',
          backgroundColor: 'orange',
        }),
        animate(
          '300ms',
          style({
            opacity: 1,
            transform: 'scale(1)',
            backgroundColor: 'pink',
          })
        ),
      ]),
      transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class PizzaComponent {
  @Input() pizza!: Pizza;
  @Input() position: 'left' | 'center' | 'right' = 'center';
  timeoutDetails!: number;
  showDetails = false;
  detailsTop = 0;
  detailsLeft = 0;

  onMouseEnter(event: Event): void {
    console.log('mouse entered! showDetails: ' + this.showDetails);
    this.timeoutDetails = setTimeout(() => {
      const companyElt = event.target as HTMLElement;
      const companyRect = companyElt.getBoundingClientRect();
      this.detailsTop = companyRect.top - 50;
      this.detailsLeft = companyRect.left;
      if (this.position === 'center') {
        this.detailsLeft -= 25;
      } else if (this.position === 'right') {
        this.detailsLeft -= 50;
      }
      this.showDetails = true;
      console.log(
        'mouse stayed! showDetails: ' +
          this.showDetails +
          ' - timeout: ' +
          this.timeoutDetails
      );
    }, 500);
  }

  onMouseLeave(origin: 'main' | 'details'): void {
    console.log(
      'mouse left - 1! showDetails: ' +
        this.showDetails +
        ' - timeout: ' +
        this.timeoutDetails
    );
    if (origin === 'main' && !this.showDetails) {
      clearTimeout(this.timeoutDetails);
      console.log(
        'mouse left - 2! showDetails: ' +
          this.showDetails +
          ' - timeout: ' +
          this.timeoutDetails
      );
    } else if (origin === 'details') {
      clearTimeout(this.timeoutDetails);
      this.showDetails = false;
      console.log(
        'mouse left - 3! showDetails: ' +
          this.showDetails +
          ' - timeout: ' +
          this.timeoutDetails
      );
    }
  }
}
