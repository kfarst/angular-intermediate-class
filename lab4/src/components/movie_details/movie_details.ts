import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, MoviesApi, RentalsApi } from '../../services/services';
import { MovieSummary } from '../movie_summary/movie_summary';
import { TitleizePipe } from '../../pipes/titleize';
import { RouteSegment, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'movie-details',
  templateUrl: 'components/movie_details/movie_details.html',
  directives: [ROUTER_DIRECTIVES, MovieSummary],
  providers: [MoviesApi, RentalsApi],
  pipes: [TitleizePipe]
})
export class MovieDetails implements OnInit {
  @ViewChild(MovieSummary)
  summary: MovieSummary;
  movie: Movie;
  categoryType: string;

  constructor (private moviesApi: MoviesApi, private rentalsApi: RentalsApi, private routeParams: RouteSegment) { }

  private apiEndpoint (): any {
    return window.location.pathname.match('movies') ? this.moviesApi : this.rentalsApi;
  }

  ngOnInit () {
    this.categoryType = this.routeParams.getParam('categoryType');
    this.apiEndpoint().get({ type: this.categoryType }).then(movies => {
      this.movie = movies.find(movie => {
        return movie.id === this.routeParams.getParam('movieID')
      });
    });
  }

  showMoreInfo () {
    this.summary.view.showMoreInfo = true;
  }

  goBack () {
    window.history.back();
  }
}
