import { Injectable } from '@angular/core';
import { Hero } from './model/hero'
import { HEROES } from './model/mock-heroes'
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { MessageService } from './../messages/message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
  	this.messageService.add('HeroService: fetching heroes');
  	return of(HEROES);
  }

  getHero(id: number): Observable<Hero>{
  	this.messageService.add('HeroService: fetching hero with id='+id);
  	return of(HEROES.find(hero => hero.id === id));
  }
}
