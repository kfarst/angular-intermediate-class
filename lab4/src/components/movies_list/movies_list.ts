import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Movie, MoviesApi, RentalsApi } from '../../services/services';
import { OnActivate, RouteSegment, Router, ROUTER_DIRECTIVES } from '@angular/router';
import { TitleizePipe } from '../../pipes/titleize';
import { MovieSummary } from '../movie_summary/movie_summary';

@Component({
  selector: 'movies-list',
  templateUrl: 'components/movies_list/movies_list.html',
  directives: [MovieSummary, ROUTER_DIRECTIVES],
  pipes: [TitleizePipe],
  providers: [MoviesApi, RentalsApi]
})
export class MoviesList implements OnInit {
  movies: Movie[];
  categoryType: string;

  constructor (private moviesApi: MoviesApi, private rentalsApi: RentalsApi, private routeParams: RouteSegment) {
  }

  private apiEndpoint (): any {
    return window.location.pathname.match('movies') ? this.moviesApi : this.rentalsApi;
  }

  ngOnInit () {
    this.categoryType = this.routeParams.getParam('categoryType');
    this.apiEndpoint().get({ type: this.categoryType }).then(movies => this.movies = movies);
  }
}
