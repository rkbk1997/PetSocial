import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { UserService } from '../.././services/userservices/user.service';
import { AuthService } from '../.././services/authservices/auth.service';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor(private router: Router, private userservice: UserService, private auth: AuthService) { }

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
