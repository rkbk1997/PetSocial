import { Component, OnInit } from '@angular/core';
import { AdminService } from '../.././services/adminservices/admin.service';
import { UserService } from '../.././services/userservices/user.service';
import {Router } from '@angular/router';
import { AuthService } from '../.././services/authservices/auth.service';
@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {
  userdata;

  constructor(private admin: AdminService, private userservice: UserService,
     private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.authCheck();
    this.getUser();
  }
  authCheck(): any {
    this.userservice.authCheck()
    .subscribe(
      res => {
        if (res.role === 'admin'){
        this.auth.admin = true;
        this.auth.username = res.username;
        console.log(res);
      }
      else{
        this.router.navigate(['']);
      }
    },
      err => this.router.navigate([''])
    );

  }


  getUser(): any {
    this.admin.getUser()
    .subscribe(
      res => this.userdata = res,
      err => console.log()
    );
  }


}
