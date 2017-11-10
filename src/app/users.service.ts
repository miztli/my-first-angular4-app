import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './messages/message.service';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UsersService {

	private usersUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getUsers(): Observable<any[]>{
  	return this.http.get<any[]>(this.usersUrl);
  }

  private log(message: string): void{
  	this.messageService.add('Calling Users API');
  }

}
