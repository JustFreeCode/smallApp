import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeBodyComponent } from './homeBody/home-body.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeBodyComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([ {
      path : 'about',
      component : AboutComponent,
    },
    {
      path : 'home-body',
      component : HomeBodyComponent,
    },
    {
      path : '', redirectTo : '/home', pathMatch : 'full'
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
