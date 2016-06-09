import { Component, Input, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, RouteSegment, ROUTER_DIRECTIVES } from '@angular/router';
import { CastAndCharacters } from '../cast_and_characters/cast_and_characters';
import { Movie } from '../../services/services';
import { TitleizePipe } from '../../pipes/titleize';
import { FormatRatingPipe } from '../../pipes/format_rating';
import { ImdbUrlPipe } from '../../pipes/imdb_url';
import { RuntimePipe } from '../../pipes/runtime';
import { KeysPipe } from '../../pipes/keys';

@Component({
  selector: 'movie-summary',
  templateUrl: 'components/movie_summary/movie_summary.html',
  directives: [ROUTER_DIRECTIVES, CastAndCharacters],
  pipes: [TitleizePipe, FormatRatingPipe, ImdbUrlPipe, RuntimePipe, KeysPipe]
})
export class MovieSummary implements AfterViewInit {
  @Input() movie: Movie;
  @Input() categoryType: string;
  @Output() viewCreated = new EventEmitter();

  view: any = {
    showMoreInfo: false
  };

  constructor (private router: Router, private el: ElementRef) {
    if (el.hasOwnProperty('showMoreInfo')) this.view.showMoreInfo = true;
  }

  movieDetailRoute (): string {
    let movieType: string = window.location.pathname.match('movies') ? 'movies' : 'rentals';
    return ['.', movieType, this.categoryType, this.movie.id].join('/');
  }

  ngAfterViewInit () {
    this.viewCreated.emit('event');
  }

  actions: Object = {
    goToMovieDetails: () => this.router.navigate([this.movieDetailRoute()])
  }
}
