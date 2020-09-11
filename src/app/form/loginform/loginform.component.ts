import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../.././services/authservices/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../.././services/userservices/user.service';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  message;
  username = false;
  password = false;

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(private auth: AuthService, private router: Router, private userservice: UserService) { }

  ngOnInit(): void {
    this.authCheck();
  }
  authCheck(): any {
    this.userservice.authCheck()
      .subscribe(
        res => {
          if (res.role === 'user') {
            this.router.navigate(['/user/home']);
            this.auth.user = true;
          }
          if (res.role === 'admin') {
            this.router.navigate(['/admin/home']);
            this.auth.admin = true;
          }

          this.auth.username = res.username;
          localStorage.setItem('username', res.username);
        },
        err => this.router.navigate(['/'])
      );

  }

  focus(): any {
    this.username = false;
    this.password = false;
  }

  login(): any {
    if (!this.loginForm.valid) {
      console.log('invalid form');
    }
    else {
      console.log('formdata=', this.loginForm.value);
      this.auth.userLogin(this.loginForm.value)
        .subscribe(
          data => {
            console.log(data.username);
            if (data.username) {
              this.username = true;
            }
            else if (data.password) {
              this.password = true;
            }
            else {
              if (data.userrole === 'user') {
                this.auth.user = true;
                this.auth.username = this.loginForm.value.username;
                localStorage.setItem('username', this.loginForm.value.username);
                this.router.navigate(['/user/home']);
              }
              if (data.userrole === 'admin') {
                this.auth.admin = true;
                this.auth.username = this.loginForm.value.username;
                localStorage.setItem('username', this.loginForm.value.username);
                this.router.navigate(['/admin/home']);
              }
            }
          },
          err => {
            console.log(err);
          },
        );
    }
  }

}
