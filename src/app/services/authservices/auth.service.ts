import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = false;
  admin = false;
  username = '';

  constructor(private http: HttpClient) { }

  userRegister(body): any {
    return this.http.post(environment.apiurl + '/register', body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  userLogin(body): any {
    return this.http.post(environment.apiurl + '/login', body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  logout(): any {
    return this.http.get(environment.apiurl + '/logout', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  getforget(body): any{
    return this.http.post(environment.apiurl + '/forget', body );
  }
}
