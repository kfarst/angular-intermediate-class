describe('Service: Rentals API', function () {
  beforeEach(module(
    'ngResource',
    'app.services',
    'app.values'
  ));

  var RentalsApi, $httpBackend, API_KEY;

  beforeEach(inject(function ($injector) {
    RentalsApi = $injector.get('RentalsApi');
    $httpBackend  = $injector.get('$httpBackend');
    API_KEY = $injector.get('API_KEY');
  }));

  it('fetches rentals by type', function () {
    $httpBackend.
      when('GET', '/api/public/v1.0/lists/dvds/upcoming.json?apikey=' + API_KEY).
      respond({ rentals: [{}, {}, {}] });

    var fetchrentals = RentalsApi.get({ type: 'upcoming' });

    $httpBackend.flush();

    fetchrentals.$promise.then(function (response) {
      expect(response.rentals.length).toBe(3);
    });
  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });
});
