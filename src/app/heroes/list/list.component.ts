import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  heroes: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Capitán América',
  ];
  deletedHero: string = '';

  removeHero() {
    this.deletedHero = this.heroes.shift() || '';
  }
}
