// angular.module('app.routes', [])
// .config(function ($stateProvider, $urlRouterProvider) {
//   $urlRouterProvider.otherwise('/movies/upcoming');
//
//   $stateProvider
//
//   .state('app', {
//     abstract: true,
//     url: '',
//     views: {
//       nav: {
//         templateUrl: 'nav.html'
//       },
//       content: {
//         template: '<div ui-view></div>'
//       }
//     }
//   })
//
//   .state('app.movies', {
//     url: '/movies/:type',
//     templateUrl: 'movies.html',
//     controller: 'MoviesController',
//     resolve: {
//       movies: function (MoviesApi, $stateParams, $q) {
//         var deferred = $q.defer();
//
//         MoviesApi.get({ type: $stateParams.type.replace('-', '_') }).
//          subscribe(function (response) {
//             deferred.resolve(response.movies);
//          });
//
//         return deferred.promise;
//       }
//     }
//   })
//
//   .state('app.movies.details', {
//     url: '/:id/details',
//     views: {
//       'content@': {
//         templateUrl: 'details.html',
//         controller: 'MovieDetailsController'
//       }
//     },
//     resolve: {
//       movie: function ($stateParams, movies) {
//         return _.find(movies, { id: $stateParams.id });
//       }
//     }
//   })
//
//   .state('app.dvds', {
//     url: '/dvds/:type',
//     templateUrl: 'movies.html',
//     controller: 'MoviesController',
//     resolve: {
//       movies: function (RentalsApi, $stateParams, $q) {
//         var deferred = $q.defer();
//
//         return RentalsApi.get({ type: $stateParams.type.replace('-', '_') }).
//           subscribe.then(function (response) {
//             deferred.resolve(response.movies);
//           });
//
//         return deferred.promise;
//       }
//     }
//   })
//
//   .state('app.dvds.details', {
//     url: '/:id/details',
//     views: {
//       'content@': {
//         templateUrl: 'details.html',
//         controller: 'MovieDetailsController'
//       }
//     },
//     resolve: {
//       movie: function ($stateParams, movies) {
//         return _.find(movies, { id: $stateParams.id });
//       }
//     }
//   });
// });
