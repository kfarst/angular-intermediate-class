describe('Directive: Cast and characters', function () {
  beforeEach(module(
    'app.directives',
    'castAndCharacters.html',
    'MOCKS.movies'
  ));

  function compileDirective (tpl) {
    tpl = tpl || '<div cast-and-characters list="list"></div>';

    inject(function ($compile) {
      element = $compile(tpl)($rootScope);
    });

    $rootScope.$digest();
  }

  function findCastMemberName (text) {
    return _.find(['Mark Ruffalo', 'Woody Harrelson', 'Dave Franco', 'Lizzy Caplan', 'Jesse Eisenberg'], function (member) {
      return text.match(member);
    });
  }

  var $rootScope, element, movieMocks;
  beforeEach(inject(function ($injector) {
    $rootScope = $injector.get('$rootScope');
    movieMocks = $injector.get('movieMocks');
  }));


  it('renders a list of cast and characters', function () {
    $rootScope.list = movieMocks[0].abridged_cast;
    compileDirective();
    _.forEach(element.find('.cast--member'), function (castElement) {
      expect(findCastMemberName(angular.element(castElement).html())).toBeTruthy();
    });
  });

});
