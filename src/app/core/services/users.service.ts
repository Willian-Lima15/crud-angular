import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RensponseUsers } from 'src/app/shared/users.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = "https://reqres.in/api/users";

  constructor(private http: HttpClient) { }

  getListaUsuarios(): Observable<RensponseUsers> { //Retorna lista de usuarios response

    return this.http.get<RensponseUsers>(this.url);
  }


}
