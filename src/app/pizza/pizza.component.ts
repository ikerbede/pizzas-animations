import { Component, Input } from '@angular/core';
import { displayDetailsAnimation } from './pizza.animations';
import { Pizza } from './pizza.model';

@Component({
  selector: 'app-pizza',
  templateUrl: 'pizza.component.html',
  styleUrls: ['pizza.component.css'],
  animations: [displayDetailsAnimation],
})
export class PizzaComponent {
  @Input() pizza!: Pizza;
  @Input() position: 'left' | 'center' | 'right' = 'center';

  showDetails = false;
  detailsTop = 0;
  detailsLeft = 0;

  private timeoutDetails!: number;

  onMouseEnter(event: Event): void {
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
    }, 500);
  }

  onMouseLeave(origin: 'main' | 'details'): void {
    if (origin === 'main' && !this.showDetails) {
      clearTimeout(this.timeoutDetails);
    } else if (origin === 'details') {
      clearTimeout(this.timeoutDetails);
      this.showDetails = false;
    }
  }
}
