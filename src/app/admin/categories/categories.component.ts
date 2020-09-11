import { Component, OnInit } from '@angular/core';
import { UserService } from '../.././services/userservices/user.service';
import { AuthService } from '../.././services/authservices/auth.service';
import { AdminService } from '../.././services/adminservices/admin.service';
import {Router} from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  cateForm: FormGroup = new FormGroup({
    cate: new FormControl(null, [Validators.required]),
    image: new FormControl(null, [Validators.required]),
  });

  constructor(private userservice: UserService, private auth: AuthService, private router: Router, private admin: AdminService) { }
  selectfile;
  select(event): any {
    this.selectfile = event.target.files[0];
    console.log('file=', this.selectfile);
  }
  ngOnInit(): void {
    this.authCheck();
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

  addcate(): any {
    let fd = new FormData();
    fd.append('cate', this.cateForm.value.cate);
    fd.append('pic' , this.selectfile);
    console.log(this.cateForm.value.cate);
    this.admin.addcate(fd)
    .subscribe(
      res => {
        alert('Add Categories SuccessFully');
        this.cateForm.reset('');
      },
      err => {
        alert('Something went Wrong...');
      },
    );
  }
}
