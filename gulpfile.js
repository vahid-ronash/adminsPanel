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
    return gulp.watch(['app/**/*test.js'], ['test']);
});