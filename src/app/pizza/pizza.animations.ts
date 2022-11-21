import { animate, style, transition, trigger } from '@angular/animations';

export const displayDetailsAnimation = trigger('displayDetails', [
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
]);
