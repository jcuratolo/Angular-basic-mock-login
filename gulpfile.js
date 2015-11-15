var gulp = require('gulp');
var config = require('./gulpConfig.js');
var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');
var debug = require('gulp-debug');

gulp.task('wiredep', function() {
    //var options = config.wiredep.getDefaultOptions();
    var index = config.paths.index;
    var dest = config.paths.src;

    gulp.src(index)
        .pipe(wiredep())
        .pipe(gulp.dest(dest));
});

gulp.task('inject', function() {
    var index = config.paths.index;
    var dest = config.paths.src;
    var source = gulp.src([
        config.paths.js + '**/*.module.js',
        config.paths.js + '**/*.service.js',
        config.paths.js + '**/*.js',
        config.paths.css + '**/*.css'
    ]);

    return gulp.src(index)
        .pipe(inject(source, {relative: true}))
        .pipe(gulp.dest(dest));
});