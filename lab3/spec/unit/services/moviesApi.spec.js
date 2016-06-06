describe('Service: Movies API', function () {
  beforeEach(module(
    'ngResource',
    'app.services',
    'app.values',
    'MOCKS.movies'
  ));

  var MoviesApi, $httpBackend, API_KEY, movieMocks;

  beforeEach(inject(function ($injector) {
    MoviesApi = $injector.get('MoviesApi');
    $httpBackend  = $injector.get('$httpBackend');
    API_KEY = $injector.get('API_KEY');
    movieMocks = $injector.get('movieMocks');
  }));

  var fetchMovies;
  beforeEach(function () {
    $httpBackend.
      when('GET', '/api/public/v1.0/lists/movies/upcoming.json?apikey=' + API_KEY).
      respond({ movies: movieMocks });

    fetchMovies = MoviesApi.get({ type: 'upcoming' });

    $httpBackend.flush();
  });

  it('fetches movies by type', function () {
    fetchMovies.$promise.then(function (response) {
      expect(response.movies.length).toBe(3);
    });
  });

  it('return correctly formatted movie objects', function () {
    fetchMovies.$promise.then(function (response) {
      response.movies.forEach(function (movie) {
        expect(movie.hasOwnProperty('id')).toBeTruthy();
        expect(movie.hasOwnProperty('title')).toBeTruthy();
        expect(movie.hasOwnProperty('year')).toBeTruthy();
        expect(movie.hasOwnProperty('mpaa_rating')).toBeTruthy();
        expect(movie.hasOwnProperty('runtime')).toBeTruthy();
        expect(movie.hasOwnProperty('release_dates')).toBeTruthy();
        expect(movie.hasOwnProperty('ratings')).toBeTruthy();
        expect(movie.hasOwnProperty('synopsis')).toBeTruthy();
        expect(movie.hasOwnProperty('posters')).toBeTruthy();
        expect(movie.hasOwnProperty('abridged_cast')).toBeTruthy();
        expect(movie.hasOwnProperty('alternate_ids')).toBeTruthy();
        expect(movie.hasOwnProperty('links')).toBeTruthy();
      });
    });
  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });
});
