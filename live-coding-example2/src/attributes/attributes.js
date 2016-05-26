angular.module('app.attributes', [])

.directive('attrDemo', function () {
  return {
    restrict: 'A',
    link: function (scope, ele, attrs) {
      scope.view = {
        oneWay: function () {
          return 'oneWay';
        },
        twoWay: {two: 'way'},
        expr: 'this is an expression',
        attrHash: attrs
      };
    }
  };
});
