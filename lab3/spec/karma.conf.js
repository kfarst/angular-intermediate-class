module.exports = function(config) {
  config.set({
    basePath: '../',

    browsers: ['Chrome'],

    frameworks: [
      'jasmine',
      'jasmine-matchers'
    ],

    files: [
      'node_modules/jquery/dist/jquery.js',
      'node_modules/lodash/lodash.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/angular-resource/angular-resource.js',
      'spec/unit/**/*.js',
      'src/**/*.html',
      'src/*.js'
    ],

    preprocessors: {
      'src/**/*.html': ['ng-html2js'],
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'src/'
    },

    plugins: [
      'karma-jasmine',
      'karma-jasmine-matchers',
      'karma-ng-html2js-preprocessor',
      'karma-chrome-launcher'
    ]
  })
}
