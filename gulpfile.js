/**
 * Created by mojtaba on 3/6/16.
 */

var gulp = require('gulp');
var karma = require('karma').Server;
var jshint = require('jshint');

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    new karma({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('autotest', function() {
    return gulp.watch(["app/**/*test.js"], ['test']);
});

gulp.task('ngdocs', [], function () {
    var gulpDocs = require('gulp-ngdocs');
    return gulp.src('app/**/*.js')
        .pipe(gulpDocs.process())
        .pipe(gulp.dest('./docs'));
});

gulp.task('codacy', function codacyTask() {
    var codacy = require('gulp-codacy');
    return gulp
        .src(['coverage/**/lcov.info'], { read: false })
        .pipe(codacy({
            token: 'ff4d1de1afa1435eaf32a014f4d19dfc'
        }));
});