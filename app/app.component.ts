import { Component, OnInit } from "@angular/core";

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: "my-app",
    templateUrl: "app/app.component.html",
    styleUrls: ["app/heroes-list.css"],
    providers: [HeroService]
})
export class AppComponent implements OnInit {
    selectedHero: Hero;
    title: string = 'Tour of Heroes';
    heroes: Hero[];

    constructor(private heroService: HeroService) { }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => {
            this.heroes = heroes;
        });
    }

    ngOnInit(): void {
        this.getHeroes();
    }
}