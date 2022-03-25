const gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    distCSS = './dist/css',
    distJS = './dist/js';

gulp.task('build-js', () => {
    return browserify('./src/js/main.js', {debug: true})
        .transform('babelify', {presets: ['@babel/preset-env'], sourceMaps: true})
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest(distJS))
        .pipe(browserSync.stream());
});

gulp.task('build-css', () => {
    return gulp.src('./src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(distCSS))
        .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', () => {
    gulp.watch('./src/js/**/*.js', gulp.parallel('build-js'));
    gulp.watch('./src/scss/**/*.scss', gulp.parallel('build-css'));
});

gulp.task('build', gulp.parallel('build-js', 'build-css', 'browser-sync'));

gulp.task('default', gulp.parallel('watch', 'build'));