import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from '../.././services/authservices/auth.service';
import { Router } from '@angular/router';
import { AuthModule } from 'src/app/auth/auth.module';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  forgetpopup = false;
  forgetemail: FormGroup = new FormGroup({
    email : new FormControl(null, [Validators.required])
  });
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  getforget(): any{
    console.log(this.forgetemail.value);
    this.auth.getforget(this.forgetemail.value)
    .subscribe(
      res => {
        if (res){
          this.forgetpopup = true;
        }
        else{
          alert('Email Not Register');
        }
      }
    );
  }

  closepopup(): any{
    this.forgetpopup = false;
    this.router.navigate(['/reset']);
  }

}
