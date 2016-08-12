var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('js', function () {
  return gulp.src(['src/**/*.{js,html}', '!bower_components/**/*'])
    .pipe($.sourcemaps.init())
    // .pipe($.if('*.html', $.crisper({scriptInHead: false}))) // Extract JS from .html files
    .pipe($.if('*.js', $.babel({
      presets: ['es2015', 'stage-0'],
      plugins: ["transform-decorators-legacy"]
    })))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('build'))
});

gulp.task('watch', ['js'], function() {

  gulp.watch(['src/**/*.html'], ['js']);
  gulp.watch(['src/**/*.js'], ['js']);

});