import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponentRoutingModule } from './shared-component-routing.module';
import { SocialAppComponent } from './social-app/social-app.component';
import { RightnavbarComponent } from './rightnavbar/rightnavbar.component';
import { LoginLeftComponent } from './login-left/login-left.component';
import { UploadButtonComponent } from './upload-button/upload-button.component';
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/profile.component';
import { FeatureComponent } from './feature/feature.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [SocialAppComponent, RightnavbarComponent,
     LoginLeftComponent, UploadButtonComponent, PostComponent, ProfileComponent, FeatureComponent, CategoriesListComponent],
  imports: [
    CommonModule,
    SharedComponentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  exports: [
    SocialAppComponent,
    RightnavbarComponent,
    LoginLeftComponent,
    UploadButtonComponent,
    PostComponent,
    ProfileComponent,
    FeatureComponent,
    CategoriesListComponent,
    ScrollingModule
  ]
})
export class SharedComponentModule { }
