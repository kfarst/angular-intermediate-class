angular.module('app.transclude', [])

.controller('TranscludeController', function ($scope) {
  $scope.location = 'controller';
})

.directive('defaultTransclusion', function ($compile) {
  return {
    restrict: 'A',
    scope: {},
    transclude: true,
    template: '<div></div>',
    link: function (scope, ele, attrs, controller, transcludeFn) {
      scope.location = 'directive';

      ele.append($compile('<h4>Directive scope is: {{$id}}</h4>')(scope));

      transcludeFn(function (clone, transclusionScope) {
        ele.append(clone);
      });
    }
  };
})

.directive('controllerScopeTransclusion', function ($compile) {
  return {
    restrict: 'A',
    scope: {},
    transclude: true,
    template: '<div></div>',
    link: function (scope, ele, attrs, controller, transcludeFn) {
      scope.location = 'directive';

      ele.append($compile('<h4>Directive scope is: {{$id}}</h4>')(scope));

      transcludeFn(scope.$parent, function (clone, transclusionScope) {
        ele.append(clone);
      });
    }
  };
})

.directive('directiveScopeTransclusion', function ($compile) {
  return {
    restrict: 'A',
    scope: {},
    transclude: true,
    template: '<div></div>',
    link: function (scope, ele, attrs, controller, transcludeFn) {
      scope.location = 'directive';

      ele.append($compile('<h4>Directive scope is: {{$id}}</h4>')(scope));

      transcludeFn(scope, function (clone, transclusionScope) {
        ele.append(clone);
      });
    }
  };
});
