System.register(['@angular/core', '@angular/router', '../movies_list/movies_list', '../movie_details/movie_details'], function(exports_1, context_1) {
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
    var core_1, router_1, movies_list_1, movie_details_1;
    var Movies;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (movies_list_1_1) {
                movies_list_1 = movies_list_1_1;
            },
            function (movie_details_1_1) {
                movie_details_1 = movie_details_1_1;
            }],
        execute: function() {
            Movies = (function () {
                function Movies(router, routeParams) {
                    this.router = router;
                    this.routeParams = routeParams;
                }
                Movies = __decorate([
                    router_1.Routes([
                        { component: movie_details_1.MovieDetails, path: '/:categoryType/:movieID' },
                        { component: movies_list_1.MoviesList, path: '/:categoryType' }
                    ]),
                    core_1.Component({
                        selector: 'movies',
                        template: '<router-outlet></router-outlet>',
                        directives: [router_1.ROUTER_DIRECTIVES, movies_list_1.MoviesList, movie_details_1.MovieDetails]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteSegment])
                ], Movies);
                return Movies;
            }());
            exports_1("Movies", Movies);
        }
    }
});
//# sourceMappingURL=movies.js.map