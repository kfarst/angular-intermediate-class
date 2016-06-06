var HomePageObject = function () {
  this.movies = element.all(by.css('.movie-summary'));

  this.get =  function () {
    browser.get('http://localhost:8000');
  };
};

module.exports = new HomePageObject();
