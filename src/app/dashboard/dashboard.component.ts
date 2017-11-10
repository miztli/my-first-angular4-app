import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HeroService } from './../heroes/hero.service';
import { Hero } from './../heroes/model/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
	heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  	this.getHeroes();
  }

  public getHeroes(){
  	this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

}
