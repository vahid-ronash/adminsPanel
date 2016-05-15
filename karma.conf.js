// Karma configuration
// Generated on Sun Mar 06 2016 12:53:46 GMT+0330 (IRST)

module.exports = function (config) {
    var configuration = {

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: "",


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ["jasmine"],//jasmine


        // list of files / patterns to load in the browser
        files: [
            "assets/libs/PACE/pace.min.js",
            "assets/js/req.js",
            "assets/js/req_un.js",

            "app/app.js",
            "app/environment.js",
            "app/urls.js",
            "app/app-controller.js",
            "app/mock.js",
            "app/config.router.js",
            "app/shared/focus/focusDirective.js",
            "app/translate.js",
            "app/**/*.js"
        ],


        // list of files to exclude
        exclude: [],


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
            type: "lcov",
            dir: "coverage/"
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
        phantomjsLauncher: {
            // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
            exitOnResourceError: true
        },

        browsers: ['PhantomJS'],//'Chrome', 'PhantomJS'
        customLaunchers: {
            Chrome_travis_ci: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        },

        browserNoActivityTimeout: 100000,
        
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    };
    // if (process.env.TRAVIS) {
    //     configuration.browsers = ['Chrome_travis_ci'];
    // }
    config.set(configuration);
};
