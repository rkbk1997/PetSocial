import { Injectable } from '@angular/core';
import { } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';;
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getUser(): any {
    return this.http.get(environment.apiurl + '/admin/viewuser');
  }

  addcate(body): any {
    return this.http.post(environment.apiurl + '/admin/addcate', body , {
      // observe: 'body',
      // withCredentials: true,
      // headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }


}
