import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeBodyComponent } from './homeBody/home-body.component';

const routes: Routes = [
  {
    path : 'about',
    component : AboutComponent,
  },
  {
    path : 'homeBody',
    component : HomeBodyComponent,
  },
  {
    path : '', redirectTo : '/home', pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
