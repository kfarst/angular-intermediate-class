angular.module('app.services', [])

.service('baseResource', function (API_KEY) {
  return function (resourceType) {
    return '/api/public/v1.0/lists/' + resourceType + '/:type.json?apikey=' + API_KEY;
  };
})

.service('MoviesApi', function ($resource, baseResource) {
  return $resource(baseResource('movies'));
})

.service('RentalsApi', function ($resource, baseResource) {
  return $resource(baseResource('dvds'));
});
