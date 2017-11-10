import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroeDetailComponent } from './heroes/heroe-detail/heroe-detail.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full'},
	{ path: 'heroes', component: HeroesComponent },
	{ path: 'heroe-detail/:id', component: HeroeDetailComponent },
	{ path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [
  	RouterModule.forRoot(routes)
  ],		
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
