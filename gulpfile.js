/**
 * Created by mojtaba on 3/6/16.
 */

var gulp = require('gulp');
var karma = require('karma');

var concat = require('gulp-concat');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var replace = require('gulp-replace');



var gzip = require('gulp-gzip');
gulp.task('compressJsFiles',function(){
    gulp.src([
            "app/**/*.js"
        ])
        .pipe(concat("mine.js"))
        .pipe(uglify())
        // .pipe(rename("public/myfiles.js"))
        //.pipe(gzip())
        .pipe(gulp.dest('public/js'));
    gulp.src("assets/libs/PACE/pace.js").pipe(uglify()).pipe(gulp.dest('assets/js'));
    gulp.src([
            "assets/libs/jquery/dist/jquery.js",
            "assets/libs/tether/dist/js/tether.js",
            "assets/libs/bootstrap/dist/js/bootstrap.js",

            "assets/libs/angular/angular.js",
            "assets/libs/angular-translate/angular-translate.js",
            "assets/libs/angular-bootstrap/ui-bootstrap-tpls.min.js",
            "assets/libs/angular-animate/angular-animate.js",
            "assets/libs/angular-smart-table/dist/smart-table.js",
            "assets/libs/angular-resource/angular-resource.js",
            "assets/libs/angular-sanitize/angular-sanitize.js",
            "assets/libs/angular-touch/angular-touch.js",
            "assets/libs/ui-select/dist/select.js",
            "assets/libs/ng-tags-input/ng-tags-input.js",
            "assets/libs/ng-file-upload-shim/ng-file-upload-shim.js",
            "assets/libs/ng-file-upload/ng-file-upload.js",
            "assets/libs/ngImgCrop/compile/unminified/ng-img-crop.js",
            "assets/libs/angular-route/angular-route.js",
            "assets/libs/angular-mocks/angular-mocks.js",
            "assets/libs/angular-ui-utils/ui-utils.js",

            "assets/libs/ace-builds/src-min-noconflict/ace.js",
            "assets/libs/angular-ui-ace/ui-ace.js"
        ])
        .pipe(concat("req.js"))
        .pipe(uglify())
        // .pipe(rename("public/myfiles.js"))
        // .pipe(gzip())
        .pipe(gulp.dest('assets/js'));

});



gulp.task('convertSCSS', function () {
    gulp.src('assets/scss/app.scss')
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths:['assets/libs/foundation/scss','bower_components']
        }).on('error', sass.logError))
        .pipe(gulp.dest('assets/css'));
});
var cleanCSS = require('gulp-clean-css');
gulp.task('minifyCSS', function() {
    return gulp.src([
            "assets/css/app.css",
            // "assets/libs/animate.css/animate.min.css",
            // "assets/libs/font-awesome/css/font-awesome.min.css",
            // "assets/libs/bootstrap/dist/css/bootstrap.min.css",
            "assets/libs/ui-select/dist/select.css",
            "assets/libs/ng-tags-input/ng-tags-input.css"
        ])
        .pipe(concat('app.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('assets/css'));
});
gulp.task('makeCSS', ['convertSCSS','minifyCSS']);
gulp.task('watchSCSS', function () {
    gulp.watch('assets/scss/**/*.scss', ['makeCSS']);
});

gulp.task('copyFontAwsome', function () {
    gulp.src('assets/libs/font-awesome/fonts/*').pipe(gulp.dest('assets/fonts'));
});




var gulpNgConfig = require('gulp-ng-config');
gulp.task('makeProductionEnvironment', function () {
    gulp.src('environment.json')
        .pipe(gulpNgConfig('app.config', {
            environment: 'production'
        })).pipe(gulp.dest('app/'));
});
gulp.task('makeDevelopmentEnvironment', function () {
    gulp.src('environment.json')
        .pipe(gulpNgConfig('app.config', {
            environment: 'development'
        })).pipe(gulp.dest('app/'));
});




/**
 * Run test once and exit
 */

gulp.task('karmaTest', function (done) {
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





gulp.task('changeServerPath', function(){
    
});
gulp.task('build', ['copyFontAwsome','makeCSS','compressJsFiles']);
gulp.task('production', ['makeProductionEnvironment','build']);
gulp.task('development', ['makeDevelopmentEnvironment','build']);
gulp.task('default', ['makeCSS','watchSCSS']);
gulp.task('test',['development','karmaTest','codacy']);