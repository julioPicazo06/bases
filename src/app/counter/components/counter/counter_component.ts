import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template:  `
  <p>
    Counter : {{ counter }}
  </p>

  <button (click)="increasBy(+1)">+</button>
  <button (click)="reset()">Reset</button>
  <button (click)="increasBy(-1)">-</button>

  <hr>

  `
})
export class CounterComponent  {
  public counter = 0;

  increasBy( value: number ):void{
    this.counter += value;
  }



  reset ():void{
    this.counter = 0;
  }
}
