import { Component, OnInit } from '@angular/core';
import { UserService } from '../.././services/userservices/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-button',
  templateUrl: './upload-button.component.html',
  styleUrls: ['./upload-button.component.css']
})
export class UploadButtonComponent implements OnInit {
  popup = false;
  catedata;
  selectpic;
  postForm: FormGroup = new FormGroup({
    cate: new FormControl(null, [Validators.required]),
    dis: new FormControl(null, [Validators.required]),
  });
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.userservice.addcate()
    .subscribe(
      res => {
        console.log(res);
        this.catedata = res ;
      },
    );
  }

  showpopup(): any {
    if ( !this.popup ){
      this.popup = true;
    }
    else{
      this.popup = false;
    }
  }

  onselect(event): any{
    this.selectpic = event.target.files[0];
    console.log('image=', this.selectpic);
  }

  addpost(): any{
    console.log(this.postForm.value);
    let fd = new FormData();
    fd.append('name', localStorage.getItem('username'));
    fd.append('cate', this.postForm.value.cate);
    fd.append('dis', this.postForm.value.dis);
    fd.append('pic', this.selectpic);
    this.userservice.addpost(fd)
    .subscribe(
      res => {
        if (res){
          alert('Post Uploaded...');
          this.postForm.reset('');
          this.popup = false;
          // this.userservice.viewPost();
          window.location.reload()
        }
      }
    );
  }



}
