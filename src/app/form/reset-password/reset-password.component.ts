import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/authservices/auth.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetData: FormGroup = new FormGroup({
    password1: new FormControl(null, [Validators.required]),
    password2: new FormControl(null, Validators.required)
  });

  restinfo = {
    email: '',
    password: ''
  }
  constructor(private route: ActivatedRoute, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(parms => {
      console.log('email -----', parms.get('email'));
      this.restinfo.email = parms.get('email');
    });
  }
  getresetdata(): any{
    if (this.resetData.value.password1 === this.resetData.value.password2){
      this.restinfo.password = this.resetData.value.password1;
      this.auth.getresetdata(this.restinfo)
      .subscribe(
        res => {
          if (res){
            alert('Password Reset Successfully');
            this.router.navigate(['/']);
          }else{
            alert('Something Went Worng');
          }
        },
      )

    }else{
      alert('password Not Matched');
    }
    console.log(this.resetData.value);

  }
}