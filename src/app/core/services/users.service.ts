import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseCreate, RequestCreate } from 'src/app/shared/createUsers';
import { ResponseUsers } from 'src/app/shared/users.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = "https://reqres.in/api/users";

  constructor(private http: HttpClient) { }

  getListaUsuarios(): Observable<ResponseUsers> { //Retorna lista de usuarios response

    return this.http.get<ResponseUsers>(this.url);
  }

  criarUsuario(request: RequestCreate): Observable<ResponseCreate> {

    return this.http.post<ResponseCreate>(this.url, request);
  }


}
