var HomePage = require('./pageObjects/homePage');

describe('Home page', function () {
  it('navigates to the correct route', function () {
    HomePage.get();
    expect(browser.getCurrentUrl()).toMatch('/movies/upcoming');
  });

  it('displays 10 movie summaries', function () {
    expect(HomePage.movies.count()).toBe(10);
  });
});
