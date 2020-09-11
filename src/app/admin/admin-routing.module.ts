import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserviewComponent } from './userview/userview.component';
import { CategoriesComponent } from './categories/categories.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: 'admin', children: [
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'userview',
        component: UserviewComponent
      },
      {
        path: 'categories',
        component: CategoriesComponent
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
export class AdminRoutingModule { }
