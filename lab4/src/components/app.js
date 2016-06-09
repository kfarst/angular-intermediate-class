System.register(['@angular/core', '@angular/router', './nav/nav', './movies/movies'], function(exports_1, context_1) {
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
    var core_1, router_1, nav_1, movies_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (nav_1_1) {
                nav_1 = nav_1_1;
            },
            function (movies_1_1) {
                movies_1 = movies_1_1;
            }],
        execute: function() {
            App = (function () {
                function App(router) {
                    this.router = router;
                }
                App.prototype.ngOnInit = function () {
                    this.router.navigate(['/movies/upcoming']);
                };
                App = __decorate([
                    router_1.Routes([
                        { component: movies_1.Movies, path: 'movies' },
                        { component: movies_1.Movies, path: 'rentals' }
                    ]),
                    core_1.Component({
                        selector: 'app',
                        template: '<nav></nav><router-outlet></router-outlet>',
                        directives: [router_1.ROUTER_DIRECTIVES, nav_1.Nav]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], App);
                return App;
            }());
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.js.map