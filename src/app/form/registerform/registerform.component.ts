import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../.././services/authservices/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {

  registerform: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    fname: new FormControl(null, [Validators.required]),
    lname: new FormControl(null, [Validators.required]),
    op: new FormControl(false, [Validators.required])
  });

  error = {
    username: '',
    password: '',
    email: '',
    fname: '',
    lname: '',
    op: ''
  };
  constructor(private auth: AuthService, private router: Router) { }

  ceateuser;
  duplicateuser;

  re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  ngOnInit(): void {
  }

  formvalid(): any {
    if (this.registerform.value.username === null) {
      this.error.username = 'Plz fill this username is requried';
      return false;
    }
    else if (this.registerform.value.password === null) {
      this.error.password = 'Plz fill this password is requried';
      return false;
    }
    else if (this.registerform.value.password.length < 5) {
      this.error.password = 'Password must be atleast five character';
      return false;
    }
    else if (this.registerform.value.email === null) {
      this.error.email = 'Plz fill this email is requried';
      return false;
    }
    else if (!this.registerform.value.email.includes('@') || !this.re.test(this.registerform.value.email)) {
      this.error.email = 'Plz enter valid email';
      return false;
    }
    else if (this.registerform.value.fname === null) {
      this.error.fname = 'Plz fill this first name is requried';
      return false;
    }
    else if (this.registerform.value.lname === null) {
      this.error.lname = 'Plz fill this last name is requried';
      return false;
    }
    else if (this.registerform.value.op === false) {
      this.error.op = 'Plz accept term and condtion';
    }
    else {
      return true;
    }
  }

  onFoucs(): any {
    this.error.username = '';
    this.error.password = '';
    this.error.email = '';
    this.error.fname = '';
    this.error.lname = '';
    this.error.op = '';
    this.duplicateuser = '';
  }

  register(): any {
    if (this.formvalid()) {
      console.log('formdata=', this.registerform.value);
      this.auth.userRegister(this.registerform.value)
        .subscribe(
          data => {
            if (data) {
              this.ceateuser = 'User Created';
              alert('User Created SuccesFully');
              this.router.navigate(['/']);
            }
            else {
              this.duplicateuser = 'User already Register';
            }
          },
          err => {
            console.log(err);
          },
        );
    }
  }

}
