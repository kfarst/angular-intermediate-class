angular.module('app', [
  'ui.router',
  'app.attributes',
  'app.controller',
  'app.element',
  'app.scope',
  'app.transclude',
])

.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/scope');

  $stateProvider

  .state('app', {
    url: '',
    abstract: true,
    views: {
      title: {
        controller: function ($scope, $state) {

          $scope.view = {
            stateName: function () {
              var stateName = $state.current.name.replace('app.', '');
              return stateName.charAt(0).toUpperCase() + stateName.slice(1);
            }
          };
        },
        template: '<h1>{{ view.stateName() }}</h1>'
      },
      '': {
        template: '<div ui-view></div>',
      }
    }
  })

  .state('app.scope', {
    url: '/scope',
    templateUrl: 'scope/scope.html',
    controller: 'ScopeController'
  })

  .state('app.element', {
    url: '/element',
    templateUrl: 'element/element.html'
  })

  .state('app.attributes', {
    url: '/attributes',
    templateUrl: 'attributes/attributes.html'
  })

  .state('app.controller', {
    url: '/controller',
    templateUrl: 'controller/controller.html'
  })

  .state('app.transclude', {
    url: '/transclude',
    templateUrl: 'transclude/transclude.html',
    controller: 'TranscludeController'
  })
});
