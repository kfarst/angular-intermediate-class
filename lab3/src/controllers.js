angular.module('app.controllers', [])

.controller('MoviesController', function ($scope, movies, $stateParams) {
  $scope.movies = movies;

  $scope.view = {
    title: $stateParams.type
  };
})

.controller('MovieDetailsController', function ($scope, movie, $stateParams) {
  $scope.movie = movie;
  $scope.view = {
    movieType: $stateParams.type
  };
});
