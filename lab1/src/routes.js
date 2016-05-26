angular.module('app.routes', [])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/movies/upcoming');

  $stateProvider

  .state('app', {
    abstract: true,
    url: '',
    views: {
      nav: {
        templateUrl: 'nav.html'
      },
      content: {
        template: '<div ui-view></div>'
      }
    }
  })

  .state('app.movies', {
    url: '/movies/:type',
    templateUrl: 'movies.html',
    controller: 'MoviesController',
    resolve: {
      movies: function (MoviesApi, $stateParams) {
        return MoviesApi.get({ type: $stateParams.type.replace('-', '_') }).
          $promise.then(function (response) {
            return response.movies;
          });
      }
    }
  })

  .state('app.movies.details', {
    url: '/:id/details',
    views: {
      'content@': {
        templateUrl: 'details.html',
        controller: 'MovieDetailsController'
      }
    },
    resolve: {
      movie: function ($stateParams, movies) {
        return _.find(movies, { id: $stateParams.id });
      }
    }
  })

  .state('app.dvds', {
    url: '/dvds/:type',
    templateUrl: 'movies.html',
    controller: 'MoviesController',
    resolve: {
      movies: function (RentalsApi, $stateParams) {
        return RentalsApi.get({ type: $stateParams.type.replace('-', '_') }).
          $promise.then(function (response) {
            return response.movies;
          });
      }
    }
  })

  .state('app.dvds.details', {
    url: '/:id/details',
    views: {
      'content@': {
        templateUrl: 'details.html',
        controller: 'MovieDetailsController'
      }
    },
    resolve: {
      movie: function ($stateParams, movies) {
        return _.find(movies, { id: $stateParams.id });
      }
    }
  });
});
