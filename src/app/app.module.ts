import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { BookComponent } from './books/books.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroeDetailComponent } from './heroes/heroe-detail/heroe-detail.component';

//- Services
import { HeroService } from './heroes/hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './messages/message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersService } from './users.service';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    HeroesComponent,
    HeroeDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HeroService, MessageService, UsersService],
  bootstrap: [
  	AppComponent
  ]
})
export class AppModule { }
