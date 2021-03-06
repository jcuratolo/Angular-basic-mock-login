var gulp = require('gulp');
var config = require('./gulpConfig.js');
var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');
var debug = require('gulp-debug');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var browserSync = require('browser-sync').create();

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
        config.paths.app + '**/*.module.js',
        config.paths.app + '**/*.service.js',
        config.paths.app + '**/*.js',
        config.paths.css + '**/*.css'
    ]);

    return gulp.src(index)
        .pipe(inject(source, {relative: true}))
        .pipe(gulp.dest(dest));
});

gulp.task('jshint', function () {
    var allJsFiles = config.paths.app + '/**/*.js';

    return gulp.src(allJsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish, {
            verbose: true
        }))
        .pipe(jshint.reporter('fail'));
});

gulp.task('serve-dev', function() {
    browserSync.init({
        server: {
            baseDir: './src/'
        }
    });

    gulp.watch([
                'index.html',
                './src/app/**/*.html',
                './src/app/**/*.js',
                '!./src/bower_components'
            ]).on('change', browserSync.reload);
});
