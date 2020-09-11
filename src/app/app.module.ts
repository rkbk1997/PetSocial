import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { SharedComponentModule } from './shared-component/shared-component.module';
import { UserModule } from './user/user.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { FormModule } from './form/form.module';
import { AuthService } from './services/authservices/auth.service';
import { HttpClientModule } from '@angular/common/http';
import {UserService} from './services/userservices/user.service';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from './services/adminservices/admin.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    AuthModule,
    SharedComponentModule,
    UserModule,
    HeaderModule,
    FooterModule,
    FormModule,
    HttpClientModule,
    // NgbModule,
    BrowserAnimationsModule,
    ScrollingModule
  ],
  exports: [
    PagenotfoundComponent,
    ScrollingModule
  ],
  providers: [AuthService, UserService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
