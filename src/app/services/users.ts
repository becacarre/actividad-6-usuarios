import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, throwError } from 'rxjs';

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
  return this.findUserById(id);
}

private findUserById(id: number, page: number = 1): Observable<IUser> {
  return this.getAll(page).pipe(
    switchMap(response => {

      const user = response.results.find(
        currentUser => currentUser.id === id
      );

      if (user?._id) {
        return this.http.get<IUser>(`${this.apiUrl}/${user._id}`);
      }

      if (page < response.total_pages) {
        return this.findUserById(id, page + 1);
      }

      return throwError(
        () => new Error('Usuario no encontrado')
      );
    })
  );
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
  deleteByMongoId(id: string): Observable<IUser> {
  return this.http.delete<IUser>(`${this.apiUrl}/${id}`);
}
}