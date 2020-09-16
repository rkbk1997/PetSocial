import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { LoginformComponent } from './loginform/loginform.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { SharedComponentModule } from '../shared-component/shared-component.module';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import {FormModuleModule} from '../form-module/form-module.module';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
@NgModule({
  declarations: [LoginformComponent, RegisterformComponent, ForgetPasswordComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    SharedComponentModule,
    ReactiveFormsModule,
    FormsModule,
    FormModuleModule
  ],
  exports: [
    LoginformComponent,
    RegisterformComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent
  ]
})
export class FormModule { }
