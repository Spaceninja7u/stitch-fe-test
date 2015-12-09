var gulp = require('gulp');
var gutil = require('gulp-util');
var closureDeps = require('gulp-closure-deps');
var less = require('gulp-less-sourcemap');
var path = require('path');
var watchLess = require('gulp-watch-less');
var notifier = new require('node-notifier');


var googDependencyPaths = {
    scripts: [
        'public/javascripts/bower_components/google-closure-library/closure/goog/**/*.js',
        'public/javascripts/app/shopify.tardisworld.App.js',
        'public/javascripts/dependencies.bower.js',
        'public/javascripts/app/**/*.js'
    ]
};

gulp.task('deps', function() {
    gulp.src(googDependencyPaths.scripts)
        .pipe(closureDeps({
            fileName: 'dependencies.app.js',
            /**
             * this path is relative to the google closure library
             * /public/javascripts/lib/bower_components/google-closure-library/closure/goog/base.js
             */
            prefix: '../../../../../../../',
            baseDir: 'public',
            changed:true
        }))
        .pipe(gulp.dest('public/javascripts'));
});

var lessFiles = [
        'public/css/main.less'
    ];


gulp.task('less', function() {
    return gulp.src(lessFiles)
        .pipe(less())
        .on('error', function (error) {
            gutil.log(gutil.colors.red(error.message))
            notifier.notify({
                title: 'Less compilation error',
                message: error.message
            })
        })
        .pipe(gulp.dest('public/css'));
});