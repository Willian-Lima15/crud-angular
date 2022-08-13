import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestCreate, RequestUpdate, ResponseCreate, ResponseUpdate, ResponseUser, ResponseUsers } from 'src/app/shared/users.model';

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
    const _url = `${this.url}/${id}`;

    return this.http.get<ResponseUser>(_url);
  }

  updateUser(id: string, usuario: RequestUpdate):Observable<ResponseUpdate> {
    const _url = `${this.url}/${id}`;

    return this.http.put<ResponseUpdate>(_url, usuario);
  }

  removeUser(id: string):Observable<any> {
    const _url = `${this.url}/${id}`;

    return this.http.delete<any>(_url);
  }
}
