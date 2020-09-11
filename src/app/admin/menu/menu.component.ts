import { Component, OnInit } from '@angular/core';
import { AuthService } from '../.././services/authservices/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-menu',
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
      req => {
        console.log(req);
      },
    );
    this.auth.username = '';
    this.auth.admin = false;
    localStorage.clear();
    // document.cookie
    this.router.navigate(['login']);
    window.location.reload();
  }

}
