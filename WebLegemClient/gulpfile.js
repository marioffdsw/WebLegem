var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var jsmin = require('gulp-jsmin');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');

gulp.task('css_min', function () {
    return gulp.src('src/**/*.css')
      .pipe(watch('src/**/*.css'))
      .pipe(plumber())
      .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
      }))
      .pipe(minifyCss())
      .pipe(gulp.dest('build'));
});

gulp.task('js_min', function () {
    return gulp.src('src/**/*.js')
        .pipe(watch('src/**/*.js'))
        .pipe(plumber())
        .pipe(jsmin())
        .pipe(gulp.dest('build'));
});

gulp.task('html_min', function () {
    return gulp.src('src/**/*.html')
        .pipe(watch('src/**/*.html'))
        .pipe(plumber())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build'));
});

gulp.task("default", [
    "js_min",
    "html_min",
    "css_min"
]);