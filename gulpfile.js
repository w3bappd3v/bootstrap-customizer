var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

var syncUrl = 'http://localhost:8080/';

var SOURCE = {
  scss: './scss/**/*.scss'
};

var DEST = {
    css: './public'
  };
   
  gulp.task('sass', function () {

    gulp.src(SOURCE.scss)
    .pipe(sass())
    .on('error', function (err) {
      console.log(err.toString());
      this.emit('end');
    })
    .pipe(gulp.dest(DEST.css))
    .pipe(browserSync.stream())
    ;

  });
  
  gulp.task('watch', ['sass'], function () {
    
    browserSync.init({
        proxy: syncUrl,
        open: false
    });

    gulp.watch(SOURCE.scss, ['sass']);

  }); 

  gulp.task('default', ['watch']);