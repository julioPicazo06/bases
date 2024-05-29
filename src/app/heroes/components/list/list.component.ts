import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = [
    'Ironman',  'Thor', 'Hulk', 'Captain America', 'Black Widow' , 'Hawkeye', 'Spiderman', 'Black Panther', 'Doctor Strange', 'Antman', 'Wasp', 'Captain Marvel', 'Scarlet Witch', 'Vision', 'Falcon'];

  public deletedHero? : string ;

    removelastHero():void {
      this.deletedHero = this.heroNames.pop();

    }

    removeFirstHero():void {
      this.deletedHero = this.heroNames.shift();

    }
}
