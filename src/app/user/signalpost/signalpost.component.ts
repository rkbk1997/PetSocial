import { Component, OnInit } from '@angular/core';
import { UserService } from '../.././services/userservices/user.service';
import { AuthService } from '../.././services/authservices/auth.service';
import { Router , ActivatedRoute} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-signalpost',
  templateUrl: './signalpost.component.html',
  styleUrls: ['./signalpost.component.css']
})
export class SignalpostComponent implements OnInit {

  postdata;
  postid;

  commentinfo = {
    pid: '',
    uid: localStorage.getItem('username'),
    dis: ''
  }

  likedata = {
    pid: '',
    uid: ''
  };

  commentForm: FormGroup = new FormGroup({
    comment: new FormControl(null, [Validators.required])
  });

  constructor(private userservice: UserService, private auth: AuthService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): any {
    this.authCheck();
    this.getpost();
  }

  authCheck(): any {
    this.userservice.authCheck()
    .subscribe(
      res => {
        if (res.role === 'user'){
        this.auth.user = true;
        this.auth.username = res.username;
        // console.log(res);
      }
      else{
        this.router.navigate(['']);
      }
    },
      err => this.router.navigate([''])
    );
  }

  getpost(): any{
    this.route.paramMap.subscribe(parms => {
      console.log('single post -----', parms.get('id'));
      this.commentinfo.pid = parms.get('id');
      this.userservice.getpost(parms.get('id'))
      .subscribe(
        res => {
          console.log(res);
          this.postdata = res[0];
        }
      );
    });
  }

  checkme(likes): any {
    if (likes.indexOf(localStorage.getItem('username')) < 0) {
      return true;
    } else {
      return false;
    }
  }

  like(ID): any {
    this.likedata.pid = ID;
    this.likedata.uid = localStorage.getItem('username');
    this.userservice.like(this.likedata)
      .subscribe(
        res => {
          this.ngOnInit();
          console.log(res);
        },
      );
    console.log('id=', this.likedata);
  }

  getcomment(): any{
    console.log(this.commentForm.value);
    this.commentinfo.dis = this.commentForm.value.comment;
    this.userservice.getcomment(this.commentinfo)
    .subscribe(
      res => {
        console.log(res),
        this.getpost();
        this.commentForm.reset('');
      },
    );
  }

}