import { Component, OnInit } from '@angular/core';

import {
   ROUTER_DIRECTIVES,
   Routes,
   Router
 } from '@angular/router';

import { Nav } from './nav/nav';
import { Movies } from './movies/movies';

@Routes([
  { component: Movies, path: 'movies' },
  { component: Movies, path: 'rentals' }
])

@Component({
  selector: 'app',
  template: '<nav></nav><router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES, Nav]
})
export class App implements OnInit {
  constructor(private router: Router) {}

  ngOnInit () {
    this.router.navigate(['/movies/upcoming']);
  }
}
