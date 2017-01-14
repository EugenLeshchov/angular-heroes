import { Component } from "@angular/core";

export class Hero {
    id: number;
    name: string;
}

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
    title: string = 'Tour of Heroes';
    heroes = HEROES;
}