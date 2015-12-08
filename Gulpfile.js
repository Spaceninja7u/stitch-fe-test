var gulp = require('gulp');
var gutil = require('gulp-util');
var webserver = require('gulp-webserver');
var less = require('gulp-less-sourcemap');
var path = require('path');
var watchLess = require('gulp-watch-less');
var notifier = new require('node-notifier');

gulp.task('webserver', function() {
    gulp.src('.')
        .pipe(webserver({
            livereload: false,
            directoryListing: true,
            open: true
        }));
});


var lessFiles = {
    src: [
        'sandbox/css/schedule.less'
    ]
};

gulp.task('less', function() {
    return gulp.src('sandbox/css/schedule.less')
        .pipe(less())
        .on('error', function (error) {
            gutil.log(gutil.colors.red(error.message))
            // Notify on error. Uses node-notifier
            notifier.notify({
                title: 'Less compilation error',
                message: error.message
            })
        })
        .pipe(gulp.dest('sandbox/css'));
});