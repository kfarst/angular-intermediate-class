System.register(['@angular/core', '../../services/services', '@angular/router-deprecated', '../../pipes/titleize', '../movie_details/movie_details', '../movie_summary/movie_summary'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, services_1, router_deprecated_1, titleize_1, movie_details_1, movie_summary_1;
    var Movies;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (services_1_1) {
                services_1 = services_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (titleize_1_1) {
                titleize_1 = titleize_1_1;
            },
            function (movie_details_1_1) {
                movie_details_1 = movie_details_1_1;
            },
            function (movie_summary_1_1) {
                movie_summary_1 = movie_summary_1_1;
            }],
        execute: function() {
            Movies = (function () {
                function Movies(routeParams, moviesApi) {
                    this.routeParams = routeParams;
                    this.moviesApi = moviesApi;
                    this.title = this.routeParams.get('categoryType');
                }
                Movies.prototype.ngOnInit = function () {
                    var _this = this;
                    this.moviesApi.get({ type: this.routeParams.get('categoryType') }).then(function (movies) { return _this.movies = movies; });
                };
                Movies = __decorate([
                    core_1.Component({
                        selector: 'movies',
                        templateUrl: 'components/movies/movies.html',
                        directives: [movie_details_1.MovieDetails, movie_summary_1.MovieSummary],
                        pipes: [titleize_1.TitleizePipe],
                        providers: [services_1.MoviesApi]
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.RouteParams, services_1.MoviesApi])
                ], Movies);
                return Movies;
            }());
            exports_1("Movies", Movies);
        }
    }
});
//# sourceMappingURL=movies.js.map