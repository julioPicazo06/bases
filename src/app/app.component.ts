import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title = 'Hola mundo';
  public counter = 0;

  increasBy( value: number ):void{
    this.counter += value;
  }

  reset ():void{
    this.counter = 0;
  }
}
