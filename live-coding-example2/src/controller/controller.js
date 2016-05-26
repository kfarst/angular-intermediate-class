angular.module('app.controller', [])

.directive('scopeVsThis', function () {
  return {
    restrict: 'A',
    template: '<h4>My name is: {{ name }}</h4>',
    scope: {
      name: '@'
    },
    controller: function ($scope) {
      console.log($scope.name);
    }
  };
})

.directive('parentDirective', function () {
  return {
    restrict: 'A',
    scope: {},
    controller: function () {
      this.message = 'This is a message from the parent directive'
    }
  };
})

.directive('childDirective', function () {
  return {
    restrict: 'A',
    require: '^^parentDirective',
    template: '<h4>{{ view.message }}</h4>',
    scope: {},
    link: function (scope, ele, attrs, controller) {
      scope.view = {
        message: controller.message
      };
    }
  };
})

.directive('useBindToControllerBoolean', function () {
  return {
    restrict: 'A',
    scope: {
      name: '='
    },
    transclude: true,
    bindToController: true,
    controllerAs: 'ctrl',
    controller: function () {},
    template: `
      <div class="row">
        <div class="col-md-6 form-group">
          <label>Name</label>
          <input class="form-control" ng-model="ctrl.name" />
        </div>
        <div class="col-md-6">
          <div ng-transclude></div>
        </div>
      </div>
      `
  };
})

.directive('useBindToControllerObject', function () {
  return {
    restrict: 'A',
    bindToController: {
      name: '='
    },
    transclude: true,
    controllerAs: 'ctrl',
    controller: function () {},
    template: `
      <div class="row">
        <div class="col-md-6 form-group">
          <label>Name</label>
          <input class="form-control" ng-model="ctrl.name" />
        </div>
        <div class="col-md-6">
          <div ng-transclude></div>
        </div>
      </div>
      `
  };
})

.directive('characterCount', function ($compile) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, ele, attrs, controller) {
      var charCounter = angular.element('<h4 ng-class="view.charsRemaining() > 0 ? \'green\': \'red\'">{{ view.charsRemaining() }}</h4>');

      scope.view = {
        charsRemaining: function () {
          return parseInt(attrs.maxChars) - (controller.$viewValue && controller.$viewValue.length || 0);
        }
      };

      controller.$parsers.push(function (val) {
        if (val.length > parseInt(attrs.maxChars)) {
          val = val.split('').splice(0, parseInt(attrs.maxChars)).join('');
          controller.$setViewValue(val);
          controller.$render();
        }

        return val;
      });

      ele.before($compile(charCounter)(scope));
    }
  };
})

.directive('inlineFormErrors', function () {
  return {
    restrict: 'A',
    require: '^^form',
    template: `
      <div class="red space" ng-if="form.$dirty && form.$invalid" ng-repeat="(key, inputs) in form.$error">
        <div ng-if="key === 'required'">
          <div ng-repeat="input in inputs">
            {{ input.$name }} is required
          </div>
        </div>

        <div ng-if="key === 'maxlength'">
          <div ng-repeat="input in inputs">
            {{ input.$name }} is too long
          </div>
        </div>

        <div ng-if="key === 'minlength'">
          <div ng-repeat="input in inputs">
            {{ input.$name }} is too short
          </div>
        </div>
      </div>
    `,
    link: function (scope, ele, attrs, ngForm) {
      scope.formModel = {};
      scope.form = ngForm;
      window.ngForm = function () {
       return scope.form;
      };
    }
  };
});
