describe('Controller: Movies', function () {
  beforeEach(module(
    'app.controllers',
    'MOCKS.movies'
  ));

  var $controller, movieMocks;
  beforeEach(inject(function ($injector) {
    $controller = $injector.get('$controller');
    movieMocks = $injector.get('movieMocks');
  }));

  var $scope, movies, $stateParams;
  beforeEach(function () {
    $scope = {};
    movies = movieMocks;
    $stateParams = { type: 'in_theaters' };

    $controller('MoviesController', {
      $scope,
      movies,
      $stateParams
    });
  });

  it('attaches the movies to the scope', function () {
    expect($scope.movies.length).toBe(3);
  });

  it('attaches the title to the scope', function () {
    expect($scope.view.title).toBe('in_theaters');
  });
});
