import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Hero } from './../model/hero';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeroeDetailComponent implements OnInit {
	@Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
