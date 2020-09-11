import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { InputEmailComponent } from './input-email/input-email.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { ButtonComponent } from './button/button.component';


@NgModule({
  declarations: [InputTextComponent, InputEmailComponent, InputPasswordComponent, ButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InputTextComponent,
    InputEmailComponent,
    InputPasswordComponent,
    ButtonComponent
  ],
})
export class FormModuleModule { }
