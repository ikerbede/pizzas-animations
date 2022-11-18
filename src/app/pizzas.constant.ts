import { Pizza } from './pizza/pizza.model';

export const PIZZAS: readonly Pizza[] = [
  { name: 'Margarita', price: 9, ingredients: ['tomate', 'mozzarella'] },
  {
    name: 'Regina',
    price: 10,
    ingredients: ['tomate', 'mozzarella', 'jambon blanc'],
  },
  {
    name: 'Royale',
    price: 11,
    ingredients: ['tomate', 'mozzarella', 'jambon blanc', 'champignons'],
  },
  {
    name: 'Calzone',
    price: 10,
    ingredients: ['tomate', 'mozzarella', 'jambon blanc'],
  },
  {
    name: 'Napoli',
    price: 13,
    ingredients: ['pistache', 'mozzarella', 'jambon blanc', 'épinards'],
  },
  {
    name: 'Basque',
    price: 13,
    ingredients: ['tomate', 'brebis', 'jambon de pays', 'poivrons'],
  },
];
