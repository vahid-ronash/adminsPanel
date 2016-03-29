/**
 * Created by mojtaba on 3/6/16.
 */

var gulp = require('gulp');
var karma = require('karma');

//var concat = require('gulp-concat');
var sass = require('gulp-sass');
//var rename = require("gulp-rename");
//var uglify = require('gulp-uglify');
//var replace = require('gulp-replace');

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    new karma.Server({
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

gulp.task('makeCSS', function () {
    gulp.src('assets/scss/app.scss')
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths:['assets/libs/foundation/scss','bower_components']
        }).on('error', sass.logError))
        .pipe(gulp.dest('assets/css'));
});
gulp.task('watchSCSS', function () {
    gulp.watch('assets/scss/**/*.scss', ['makeCSS']);
});

var webpack = require('gulp-webpack');
gulp.task('webpack', function() {
    return gulp.src('app/app.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('build/'));
});


gulp.task('build', ['makeCSS']);

gulp.task('default', ['makeCSS','watchSCSS']);