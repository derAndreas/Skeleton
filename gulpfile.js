
var gulp = require('gulp');
var stylus = require('gulp-stylus');
var rename = require('gulp-rename');
var csso = require('gulp-csso');

gulp.task('normalize.css', function() {
  return gulp.src('node_modules/normalize.css/normalize.css')
    .pipe(gulp.dest('dist/'))
    .pipe(csso())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('build', ['normalize.css'], function() {
  return gulp.src('index.styl')
    .pipe(stylus())
    .pipe(rename('skeleton.css'))
    .pipe(gulp.dest('./dist/'))
    .pipe(csso())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['build']);
