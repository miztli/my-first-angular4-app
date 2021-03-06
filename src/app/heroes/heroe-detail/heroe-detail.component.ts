import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from './../model/hero';
import { HeroService } from './../hero.service';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeroeDetailComponent implements OnInit {
  hero: Hero;

  constructor(
  		private route: ActivatedRoute, 
  		private heroService: HeroService, 
  		private location: Location
  ) {}

  ngOnInit() {
  	this.getHero();
  }

  getHero(): void {
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void{
  	this.location.back();
  }

}
