// Karma configuration
// Generated on Sun Mar 06 2016 12:53:46 GMT+0330 (IRST)

module.exports = function(config) {
  var configuration={

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["jasmine"],//jasmine


    // list of files / patterns to load in the browser
    files: [
        //'app/**/*test.js'
      "assets/libs/jquery/dist/jquery.js",

      "assets/libs/tether/dist/js/tether.min.js",
      "assets/libs/bootstrap/dist/js/bootstrap.js",
      "assets/libs/PACE/pace.min.js",

      "assets/libs/angular/angular.js",
      "assets/libs/angular-translate/angular-translate.js",
      "assets/libs/angular-bootstrap/ui-bootstrap-tpls.min.js",
      "assets/libs/angular-animate/angular-animate.js",
      "assets/libs/angular-smart-table/dist/smart-table.js",
      "assets/libs/angular-resource/angular-resource.js",
      "assets/libs/angular-sanitize/angular-sanitize.js",
      "assets/libs/angular-touch/angular-touch.js",

      "assets/libs/ui-select/dist/select.js",
      "assets/libs/ng-file-upload-shim/ng-file-upload-shim.min.js",
      "assets/libs/ng-file-upload/ng-file-upload.min.js",

      "assets/libs/angular-route/angular-route.js",
      "assets/libs/angular-mocks/angular-mocks.js",

      "assets/libs/ngstorage/ngStorage.js",
      "assets/libs/angular-ui-utils/ui-utils.js",
      "assets/libs/oclazyload/dist/ocLazyLoad.js",

        "assets/libs/angular-ui-ace/ui-ace.js",
        "assets/libs/ace-builds/src-min-noconflict/ace.js",


        "app/app.js",
        "app/app-controller.js",
        "app/mock.js",
        "app/config.router.js",
        "app/shared/focusDirective.js",
        "app/translate.js",
        "app/**/*.js"
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      //'app/**/*.js': ['coverage']
      "app/**/*.js": ["coverage"]//don't use test unit for coverage(test units have "test" in their name)
    },

    // optionally, configure the reporter
    coverageReporter: {
      type : "lcov",
      dir : "coverage/"
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],//, 'PhantomJS'

    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  };
  if(process.env.TRAVIS){
    configuration.browsers = ['Chrome_travis_ci'];
  }
  config.set(configuration);
};
