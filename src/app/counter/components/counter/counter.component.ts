import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{ counter }}</h3> <!-- Estoy enlazando a la propiedad 'counter' que hay en "app.component.ts "-->

  <button (click)="increaseBy(1)">+1</button> <!-- Botón que cuando se hace click llama al método para sumar 1 al contador -->
  <button (click)="resetCounter()">Reset</button> <!-- Botón que cuando se hace click llama al método para reestablecer el contador -->
  <button (click)="increaseBy(-1)">-1</button> <!-- Botón que cuando se hace click llama al método para restar 1 al contador -->
  `
})

export class CounterComponent {
  constructor() { }

  public counter: number = 10;

  /**
   * Método que recibe un number e incrementa el contador al valor de ese number.
   */
  increaseBy(value: number): void {
    this.counter += value;
  }

  /**
   *  Método que resetea el contador a 10
   */
  resetCounter(): void {
    this.counter = 10;
  }

}
