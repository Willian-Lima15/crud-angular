import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseCreate, RequestCreate } from 'src/app/shared/createUsers';
import { RequestUpdate, ResponseUser } from 'src/app/shared/user.model';
import { ResponseUsers } from 'src/app/shared/users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<ResponseUsers> {
    //Retorna lista de usuarios response

    return this.http.get<ResponseUsers>(this.url);
  }

  createUser(usuario: RequestCreate): Observable<ResponseCreate> {
    return this.http.post<ResponseCreate>(this.url, usuario);
  }

  getUser(id: string): Observable<ResponseUser> {
    const url = `${this.url}/${id}`;

    return this.http.get<ResponseUser>(url);
  }

  updateUser(id: string, usuario: RequestUpdate):Observable<RequestUpdate> {
    const url = `${this.url}/${id}`;

    return this.http.post<RequestUpdate>(url, usuario);
  }
}
