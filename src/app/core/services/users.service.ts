import { Injectable } from '@angular/core';
import {User} from '../models/User';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environment/environment';

const { apiUrl } = environment;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly url: string = `${apiUrl}/usuarios`;

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}`);
  }

  public createUser(user: User): Observable<any> {
    return this.http.post(this.url, user);
  }

  public updateUser(user: User, id: number): Observable<any> {
    return this.http.put(`${this.url}/${id}`, user);
  }
}
