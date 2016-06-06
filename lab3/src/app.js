angular.module('app', [
  'ui.router',
  'ngResource',
  'app.controllers',
  'app.directives',
  'app.filters',
  'app.routes',
  'app.services',
  'app.values'
])

.run(function ($rootScope) {
  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    console.log(error);
  });
});
