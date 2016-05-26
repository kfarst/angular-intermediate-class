angular.module('app.scope', [])

.controller('ScopeController', function ($scope) {
  $scope.oneWayIsolateScopeName = 'One Way Name';
  $scope.textIsolateScopeName = 'Text Name';
})

.directive('useParentScope', function () {
  return {
    restrict: 'A',
    scope: false,
    transclude: true,
    template: `
      <div class="row">
        <div class="col-md-6 form-group">
          <label>Name</label>
          <input class="form-control" ng-model="parentScopeName" />
          <div class="space text-center">Scope ID: {{ $id }}</div>
        </div>
      </div>
      `,
    link: function (scope, ele, attrs, controller, transcludeFn) {
      var transcludeContainer = angular.element('<div class="col-md-6"></div>');
      transcludeContainer.html(transcludeFn());
      ele.find('.row').append(transcludeContainer);
    }
  };
})

.directive('useNewScope', function () {
  return {
    restrict: 'A',
    scope: true,
    transclude: true,
    template: `
      <div class="row">
        <div class="col-md-6 form-group">
          <label>Name</label>
          <input class="form-control" ng-model="newScopeName" />
          <div class="space text-center">Scope ID: {{ $id }}</div>
        </div>
        <div class="col-md-6">
          <div ng-transclude></div>
        </div>
      </div>
      `
  };
})

.directive('useTwoWayIsolateScope', function () {
  return {
    restrict: 'A',
    scope: {
      name: '='
    },
    transclude: true,
    template: `
      <div class="row">
        <div class="col-md-6 form-group">
          <label>Name</label>
          <input class="form-control" ng-model="name" />
          <div class="space text-center">Scope ID: {{ $id }}</div>
        </div>
        <div class="col-md-6">
          <div ng-transclude></div>
        </div>
      </div>
      `
  };
})

.directive('useOneWayIsolateScope', function () {
  return {
    restrict: 'A',
    scope: {
      name: '&'
    },
    transclude: true,
    template: `
      <div class="row">
        <div class="col-md-6 form-group">
          <label>Name</label>
          <input class="form-control" value="{{name()}}" />
          <div class="space text-center">Scope ID: {{ $id }}</div>
        </div>
        <div class="col-md-6">
          <div ng-transclude></div>
        </div>
      </div>
      `
  };
})

.directive('useTextIsolateScope', function () {
  return {
    restrict: 'A',
    scope: {
      name: '@'
    },
    transclude: true,
    template: `
      <div class="row">
        <div class="col-md-6 form-group">
          <label>Name</label>
          <input class="form-control" ng-model="name" />
          <div class="space text-center">Scope ID: {{ $id }}</div>
        </div>
        <div class="col-md-6">
          <div ng-transclude></div>
        </div>
      </div>
      `
  };
});
