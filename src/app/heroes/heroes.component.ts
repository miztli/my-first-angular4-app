import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Hero } from './model/hero';
import { HeroService } from './hero.service';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeroesComponent implements OnInit {
	heroes: Hero[];
  users: any[];
	
  hero : Hero = {
		id:1,
		name:'Julian Casablancas'
	}

	constructor(
    private heroService: HeroService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.getHeroes();
    this.getUsers();
  }

  getHeroes():void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  getUsers():void{
    this.usersService.getUsers().subscribe(users => this.users = users);
  }

}
