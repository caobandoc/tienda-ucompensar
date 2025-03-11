import { Injectable } from '@angular/core';
import {Token, User} from '../models/User';
import {Observable, tap} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environment/environment';

const { apiUrl } = environment;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly url: string = `${apiUrl}/login`;

  constructor(private readonly http: HttpClient) { }

  public postLogin(user: User): Observable<Token> {
    return this.http.post<Token>(this.url, user)
      .pipe(tap(response =>{
        localStorage.setItem('token', response.token);
      }));
  }

  public deleteToken() {
    localStorage.removeItem('token');
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }
}
