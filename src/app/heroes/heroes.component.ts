import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Hero } from './model/hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeroesComponent implements OnInit {
	heroes: Hero[];
	
  hero : Hero = {
		id:1,
		name:'Julian Casablancas'
	}

	selectedHero: Hero;

	constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void{
  	this.selectedHero = hero;
  }

  getHeroes():void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
