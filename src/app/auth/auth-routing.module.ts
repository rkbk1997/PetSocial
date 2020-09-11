import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginformComponent } from '../form/loginform/loginform.component';
import { RegisterformComponent } from '../form/registerform/registerform.component';
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
