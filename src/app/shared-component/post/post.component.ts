import { Component, OnInit } from '@angular/core';
import { UserService } from '../.././services/userservices/user.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postdata;
  likedata = {
    pid: '',
    uid: ''
  };
  showSpinner = false;
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.userservice.viewPost()
      .subscribe(
        res => {
          this.postdata = res,
          console.log('post=', res);
          console.log('likes=', res[0].likes);
        }
      );
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

  onContainerScroll(e: Event): any {
    console.log((e.target as Element).scrollTop);
    if ((e.target as Element).scrollTop % 1000 === 0 ){
      this.showSpinner = true;
      setTimeout(() => {
        this.showSpinner = false;
      }, 5000);
    }
  }
}
