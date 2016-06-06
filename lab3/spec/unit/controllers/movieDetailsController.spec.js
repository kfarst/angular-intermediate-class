describe('Controller: Movie Details', function () {
  beforeEach(module(
    'app.controllers',
    'MOCKS.movies'
  ));

  var $controller, movieMocks;
  beforeEach(inject(function ($injector) {
    $controller = $injector.get('$controller');
    movieMocks = $injector.get('movieMocks');
  }));

  var $scope, movie, $stateParams;
  beforeEach(function () {
    $scope = {};
    movie = movieMocks[0];
    $stateParams = { type: 'box_office' };

    $controller('MovieDetailsController', {
      $scope,
      movie,
      $stateParams
    });
  });

  it('attaches a movies to the scope', function () {
    expect($scope.movie).not.toBeUndefined();
  });

  it('has a movie with the correct values', function () {
    expect($scope.movie.hasOwnProperty('id')).toBeTruthy();
    expect($scope.movie.hasOwnProperty('title')).toBeTruthy();
    expect($scope.movie.hasOwnProperty('year')).toBeTruthy();
    expect($scope.movie.hasOwnProperty('mpaa_rating')).toBeTruthy();
    expect($scope.movie.hasOwnProperty('runtime')).toBeTruthy();
    expect($scope.movie.hasOwnProperty('release_dates')).toBeTruthy();
    expect($scope.movie.hasOwnProperty('ratings')).toBeTruthy();
    expect($scope.movie.hasOwnProperty('synopsis')).toBeTruthy();
    expect($scope.movie.hasOwnProperty('posters')).toBeTruthy();
    expect($scope.movie.hasOwnProperty('abridged_cast')).toBeTruthy();
    expect($scope.movie.hasOwnProperty('alternate_ids')).toBeTruthy();
    expect($scope.movie.hasOwnProperty('links')).toBeTruthy();
  });

  it('attaches the movie type to the scope', function () {
    expect($scope.view.movieType).toBe('box_office');
  });
});
