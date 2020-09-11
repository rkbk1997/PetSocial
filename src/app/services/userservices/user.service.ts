import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  authCheck(): any {
    return this.http.get(environment.apiurl + '/user', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  addcate(): any {
    return this.http.get(environment.apiurl + '/user/cateview', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  addpost(body): any{
    console.log('user service call')
    return this.http.post( environment.apiurl + '/user/addpost', body , {
      // observe: 'body',
      // withCredentials: true,
      // headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  viewPost(): any {
    return this.http.get(environment.apiurl + '/user/viewpost');
  }

  like(body): any {
    console.log('body in service=',body)
    return this.http.post(environment.apiurl + '/user/like', body);
  }
}
