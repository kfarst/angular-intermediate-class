angular.module('app.directives', [])

.directive('movieSummary', function ($state) {
  return {
    restrict: 'A',
    templateUrl: 'movieSummary.html',
    scope: {
      movie: '='
    },
    link: function (scope, ele, attrs) {
      scope.view = {
        showMoreInfo: attrs.hasOwnProperty('showMoreInfo'),
        movieType: $state.params.type
      };

      scope.actions = {
        goToMovieDetails: function () {
          $state.go('.details', { id: scope.movie.id });
        }
      };
    }
  };
})

.directive('castAndCharacters', function () {
  return {
    restrict: 'A',
    templateUrl: 'castAndCharacters.html',
    scope: {
      list: '='
    }
  };
});
