import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedComponentModule } from '../shared-component/shared-component.module';
import { UserModule } from '../user/user.module';
import { AdminModule } from '../admin/admin.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    SharedComponentModule,
    UserModule,
    AdminModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class HeaderModule { }
