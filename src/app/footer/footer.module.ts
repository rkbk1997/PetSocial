import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './footer/footer.component';
import { SharedComponentModule } from '../shared-component/shared-component.module';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    FooterRoutingModule,
    SharedComponentModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
