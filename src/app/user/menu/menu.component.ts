import { Component, OnInit } from '@angular/core';
import { AuthService } from '../.././services/authservices/auth.service';
import {} from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  usertacking(): any {
    return this.auth.username;
  }

  logout(): any {
    this.auth.logout()
    .subscribe(
      req => { console.log(req);},
    );
    this.auth.username = '';
    this.auth.user = false;
    localStorage.clear();
    // document.cookie
    this.router.navigate(['']);
    window.location.reload();
  }

}
