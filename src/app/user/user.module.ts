import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SharedComponentModule } from '../shared-component/shared-component.module';
import { SignalpostComponent } from './signalpost/signalpost.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, MenuComponent, TimelineComponent, SignalpostComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedComponentModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
    MenuComponent,
    TimelineComponent,
    SignalpostComponent
  ]
})
export class UserModule { }
