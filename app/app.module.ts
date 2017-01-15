import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, Form } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from "./hero-detail.component";
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: 'heroes',
                component: HeroesComponent
            }
        ])
    ],
    declarations: [HeroesComponent, HeroDetailComponent, AppComponent],
    bootstrap: [AppComponent],
    providers: [HeroService]
})
export class AppModule {

}