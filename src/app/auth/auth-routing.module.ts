import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgetPasswordComponent } from '../form/forget-password/forget-password.component';
import { LoginformComponent } from '../form/loginform/loginform.component';
import { RegisterformComponent } from '../form/registerform/registerform.component';
import { ResetPasswordComponent } from '../form/reset-password/reset-password.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
const routes: Routes = [
  {
    path: '',
    component: LoginformComponent
  },
  {
    path: 'register',
    component: RegisterformComponent
  },
  {
    path: 'forget',
    component: ForgetPasswordComponent
  },
  {
    path: 'reset',
    component: ResetPasswordComponent
  }
  // {
  //   path: '**',
  //   component: PagenotfoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
