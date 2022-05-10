import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
        <h1>{{ title }}</h1>

        <h3>La base es: {{ base }}</h3>

        <button (click)="acc(base)">+ {{ base }}</button>

        <span>{{ number }}</span>

        <button (click)="acc(-base)">- {{ base }}</button>
    `

})
export class CounterComponent {
    title: string = 'Acumulador';
    number: number = 10;
    base: number = 5;
  
    acc(value: number) {
      this.number += value;
    }
}