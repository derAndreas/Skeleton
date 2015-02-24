
var gulp = require('gulp');
var stylus = require('gulp-stylus');
var rename = require('gulp-rename');
var csso = require('gulp-csso');

gulp.task('build', function() {
  return gulp.src('index.styl')
    .pipe(stylus({'include css': true}))
    .pipe(rename('skeleton.css'))
    .pipe(gulp.dest('./dist/'))
    .pipe(csso())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['build']);
