import { Component } from "@angular/core";
import { Hero } from './hero';

const HEROES: Hero[] = [
    { id: 1, name: 'Alinanas' },
    { id: 2, name: 'Eurenius' },
    { id: 3, name: 'Kostya Fedirich'},
    { id: 4, name: 'Mrs. Vospetka'},
    { id: 5, name: 'Mr. Dekan'}
];

@Component({
    selector: "my-app",
    templateUrl: "app/app.component.html",
    styleUrls: ["app/heroes-list.css"]
})
export class AppComponent {
    selectedHero: Hero;
    title: string = 'Tour of Heroes';
    heroes = HEROES;

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}