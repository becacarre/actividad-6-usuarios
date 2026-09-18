import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IUser } from '../interfaces/iuser';
import { IUserResponse } from '../interfaces/iuser-response';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'https://peticiones.online/api/users';

  constructor(private http: HttpClient) { }

  getAll(page: number = 1): Observable<IUserResponse> {
    return this.http.get<IUserResponse>(`${this.apiUrl}?page=${page}`);
  }

  getById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.apiUrl}/${id}`);
  }

  create(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.apiUrl, user);
  }

  update(id: number, user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${this.apiUrl}/${id}`, user);
  }

  delete(id: number): Observable<IUser> {
    return this.http.delete<IUser>(`${this.apiUrl}/${id}`);
  }
}