import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { LoginUser } from '../models/loginUser';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedInUser: LoginUser;

  private loginUrl = 'http://localhost:26035/login'
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<LoginUser> {
    const body = new HttpParams()
      .set('grant_type', 'password')
      .set('username', username)
      .set('password', password);

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      };
      return this.http.post<LoginUser>(this.loginUrl, body.toString(), httpOptions)
        .pipe(
          tap(loggedInUser => this.loggedInUser = loggedInUser)
        );
      }

      logout() {
        this.loggedInUser = null;
      }
    
      getOptionsWithToken() {
        return {
          headers: new HttpHeaders({
            'Authorization': `Bearer ${this.loggedInUser.access_token}`,
            'Content-Type': 'application/json'})
        };
      }

}

