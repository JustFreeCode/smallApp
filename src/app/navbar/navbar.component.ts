import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 /* This is a TypeScript code for an Angular component that represents a navbar. */
  constructor(private router : Router) {}

 /**
  * The function navigates to the "about" page using the Angular router.
  */
  aboutClick() {
    this.router.navigate(['/about']);
  }
}
