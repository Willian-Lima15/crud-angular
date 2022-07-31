import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RensponseUsers } from 'src/app/shared/users.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = "https://reqres.in/api/users";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<RensponseUsers> { //Retorna usuario response

    return this.http.get<RensponseUsers>(this.url);
  }
}
