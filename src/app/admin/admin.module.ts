import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { UserviewComponent } from './userview/userview.component';
import {SharedComponentModule} from '../shared-component/shared-component.module';
import { CategoriesComponent } from './categories/categories.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {} from '@angular/forms';
// import { from } from 'rxjs';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
// import { AppModule } from '../app.module';
@NgModule({
  declarations: [MenuComponent, HomeComponent, UserviewComponent, CategoriesComponent, PagenotfoundComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedComponentModule,
    FormsModule,
    ReactiveFormsModule
    // AppModule
  ],
  exports: [
  MenuComponent,
  HomeComponent,
  UserviewComponent,
  CategoriesComponent,
  PagenotfoundComponent
  ]
})
export class AdminModule { }
