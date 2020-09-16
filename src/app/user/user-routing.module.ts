import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SignalpostComponent } from './signalpost/signalpost.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
const routes: Routes = [
  {
    path: 'user', children: [
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'timeline',
        component: TimelineComponent
      },
      {
        path: 'signalpost/:id',
        component: SignalpostComponent
      },
      {
        path: '**',
        component: PagenotfoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
