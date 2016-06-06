angular.module('app.filters', [])

.filter('formatRating', function () {
  return function (score) {
    if (Number.isInteger(score)) {
      return score < 0 ? 'No Score Yet' : [score, '%'].join('');
    }
    return score;
  };
})

.filter('titleize', function () {
  return function (str) {
    return str.replace('_', ' ').replace('-', ' ').replace(/\w\S*/g, function(txt){
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };
})

.filter('imdbUrl', function () {
  return function (id) {
    return 'http://www.imdb.com/title/tt' + id + '/';
  };
})

.filter('runtime', function () {
  return function (movie) {
    return movie.runtime.length ? [movie.runtime, 'Minutes'].join(' ') : 'Unknown';
  };
});
