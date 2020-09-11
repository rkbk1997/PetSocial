import { Component, OnInit } from '@angular/core';
import { UserService } from '../.././services/userservices/user.service';
import { AuthService } from '../.././services/authservices/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signalpost',
  templateUrl: './signalpost.component.html',
  styleUrls: ['./signalpost.component.css']
})
export class SignalpostComponent implements OnInit {

  constructor(private userservice: UserService, private auth: AuthService, private router: Router) { }
  ngOnInit(): void {
    this.authCheck();
  }
  authCheck(): any {
    this.userservice.authCheck()
    .subscribe(
      res => {
        if (res.role === 'user'){
        this.auth.user = true;
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


}
