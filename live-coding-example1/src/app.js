angular.module('app', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/users');

  // Un-comment this code if you want a view's templateUrl to be dynamically interpolated
  // from the state name. This only works if a state has no template, views, templateProvider,
  // or templateUrl keys. The interpolation pattern is as follows:
  //
  //       State Name           Template File Name
  // 'app.some.state.name' -> 'some.state.name.html'
  //
  // $stateProvider.decorator('templateUrl', function(state, parent) {
  //   angular.forEach(Object.keys(state.self), angular.bind(state, function (key) {
  //     if (['template', 'views', 'templateProvider', 'templateUrl'].indexOf(key) > -1) {
  //       return;
  //     }
  //   }));
  //
  //   var stateName = state.name.split('.');
  //   stateName.shift();
  //
  //   return stateName.concat('html').join('.');
  // });

  $stateProvider
  .state('app', {
    abstract: true,
    url: '',
    views: {
      'nav@': {
        templateUrl: 'nav.html',
        controller: function ($scope, currentUser) {
          $scope.currentUser = currentUser;
        }
      },
      'content@': {
        template: '<div ui-view></div>'
      }
    },
    resolve: {
      currentUser: function () {
        return { name: 'Kevin Farst', gender: 'Male' };
      }
    },
    data: {
      showBackButton: false
    }
  })
  .state('app.route1', {
    url: '/route1',
    templateUrl: 'route1.html'
  })
  .state('app.route1.list', {
    url: '/list',
    data: {
      showBackButton: true
    },
    views: {
      'list@app.route1': {
        templateUrl: 'route1.list.html',
        controller: function ($scope) {
          $scope.items = ['A', 'list', 'of', 'things'];
        }
      }
    }
  })
  .state('app.route2', {
    url: '/route2',
    templateUrl: 'route2.html',
  })
  .state('app.route2.list', {
    url: '/list',
    controller: function ($scope) {
      $scope.items = ['A', 'list', 'of', 'things'];
    },
    data: {
      showBackButton: true
    },
    views: {
      'list@app.route2': {
        templateUrl: 'route2.list.html',
        controller: function ($scope) {
          $scope.items = ['A', 'list', 'of', 'things'];
        }
      }
    }
  })
  .state('app.users', {
    abstract: true,
    url: '/users',
    template: '<div ui-view></div>',
    data: {
      showBackButton: false
    }
  })
  .state('app.users.list', {
    url: '',
    templateUrl: 'users.list.html',
    controller: function ($scope, users) {
      $scope.users = users;
    },
    resolve: {
      users: function (UsersApi) {
        return UsersApi.get();
      }
    }
  })
  .state('app.users.detail', {
    url: '/{id:int}',
    templateUrl: 'users.detail.html',
    controller: function ($scope, user) {
      $scope.user = user;
    },
    resolve: {
      user: function (UsersApi, $stateParams) {
        return UsersApi.get($stateParams.id);
      }
    },
    data: {
      showBackButton: true
    }
  });
})
.directive('backButton', function ($rootScope, $state) {
  return {
    restrict: 'A',
    template: '<a href class="btn btn-link" ng-click="actions.goBack()"><< Back</a>',
    link: function (scope, ele) {
      var from = {};

      $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        from.state = fromState;
        from.params = fromParams;

        if (toState.data.showBackButton) {
          ele.removeClass('hide');
        } else {
          ele.addClass('hide');
        }
      });

      scope.actions = {
        goBack: function () {
          $state.go(from.state, from.params);
        }
      };
    }
  };
})
.service('UsersApi', function ($q) {
  return {
    get: function (id) {
      var users = [{
        "id": 1,
        "gender": "Female",
        "first_name": "Frances",
        "last_name": "Jenkins",
        "email": "fjenkins0@oaic.gov.au"
      }, {
        "id": 2,
        "gender": "Male",
        "first_name": "Jimmy",
        "last_name": "Stevens",
        "email": "jstevens1@reference.com"
      }, {
        "id": 3,
        "gender": "Male",
        "first_name": "Frank",
        "last_name": "Sanchez",
        "email": "fsanchez2@craigslist.org"
      }, {
        "id": 4,
        "gender": "Female",
        "first_name": "Sarah",
        "last_name": "Warren",
        "email": "swarren3@addthis.com"
      }, {
        "id": 5,
        "gender": "Male",
        "first_name": "George",
        "last_name": "Fox",
        "email": "gfox4@plala.or.jp"
      }, {
        "id": 6,
        "gender": "Male",
        "first_name": "Andrew",
        "last_name": "Bradley",
        "email": "abradley5@i2i.jp"
      }, {
        "id": 7,
        "gender": "Male",
        "first_name": "Louis",
        "last_name": "Robinson",
        "email": "lrobinson6@google.com.au"
      }, {
        "id": 8,
        "gender": "Male",
        "first_name": "Donald",
        "last_name": "Sullivan",
        "email": "dsullivan7@4shared.com"
      }, {
        "id": 9,
        "gender": "Female",
        "first_name": "Jacqueline",
        "last_name": "Reid",
        "email": "jreid8@stumbleupon.com"
      }, {
        "id": 10,
        "gender": "Female",
        "first_name": "Diana",
        "last_name": "Bell",
        "email": "dbell9@disqus.com"
      }, {
        "id": 11,
        "gender": "Male",
        "first_name": "Andrew",
        "last_name": "Kelley",
        "email": "akelleya@google.cn"
      }, {
        "id": 12,
        "gender": "Male",
        "first_name": "Joseph",
        "last_name": "Fisher",
        "email": "jfisherb@drupal.org"
      }, {
        "id": 13,
        "gender": "Male",
        "first_name": "Richard",
        "last_name": "Ross",
        "email": "rrossc@ed.gov"
      }, {
        "id": 14,
        "gender": "Female",
        "first_name": "Denise",
        "last_name": "Bowman",
        "email": "dbowmand@altervista.org"
      }, {
        "id": 15,
        "gender": "Male",
        "first_name": "Larry",
        "last_name": "Larson",
        "email": "llarsone@google.fr"
      }, {
        "id": 16,
        "gender": "Female",
        "first_name": "Judith",
        "last_name": "Gray",
        "email": "jgrayf@abc.net.au"
      }, {
        "id": 17,
        "gender": "Female",
        "first_name": "Diane",
        "last_name": "Dean",
        "email": "ddeang@eventbrite.com"
      }, {
        "id": 18,
        "gender": "Male",
        "first_name": "Victor",
        "last_name": "Gomez",
        "email": "vgomezh@europa.eu"
      }, {
        "id": 19,
        "gender": "Female",
        "first_name": "Martha",
        "last_name": "Carpenter",
        "email": "mcarpenteri@samsung.com"
      }, {
        "id": 20,
        "gender": "Male",
        "first_name": "Phillip",
        "last_name": "Moreno",
        "email": "pmorenoj@dropbox.com"
      }];

      if (id) {
        return $q.when(_.find(users, { id: id }));
      } else {
        return $q.when(users);
      }
    }
  };
});
