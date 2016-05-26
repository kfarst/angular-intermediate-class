angular.module('app.element', [])

.directive('tabBar', function ($compile) {
  return {
    restrict: 'A',
    link: function (scope, ele) {
      ele.addClass('nav');
      ele.addClass('nav-tabs');

      _.forEach(ele.find('li div'), function (linkDiv) {
        var anchorTag = angular.element('<a></a>'),
          linkDiv = angular.element(linkDiv),
          sref = linkDiv.attr('link');

        anchorTag.html(linkDiv.html());
        anchorTag.attr('data-toggle', 'tab');
        anchorTag.attr('ui-sref', sref);
        linkDiv.replaceWith($compile(anchorTag)(scope));
      });
    }
  };
});
