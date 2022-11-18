import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaMainComponent } from './pizza-main/pizza-main.component';
import { PizzaDetailsComponent } from './pizza-details/pizza-details.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule],
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaMainComponent,
    PizzaDetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
