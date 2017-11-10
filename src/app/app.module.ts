import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BookComponent } from './books/books.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroeDetailComponent } from './heroes/heroe-detail/heroe-detail.component';

//- Services
import { HeroService } from './heroes/hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './messages/message.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    HeroesComponent,
    HeroeDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HeroService, MessageService],
  bootstrap: [
  	AppComponent
  ]
})
export class AppModule { }
