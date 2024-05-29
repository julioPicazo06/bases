import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public title = 'Heros'
  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  public getHeroDEscription():string {
    return `${ this.name } - ${ this.age }`;
  }

  public changeHero(hero:string):void {
    this.name = hero;
  }

  public changeAge(age:number):void {
    this.age = age;
  }

  public reset():void {
    this.name = 'Ironman';
    this.age = 45;
  }

}
