var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

gulp.task('pug', function buildHTML() {
  return gulp.src('../pages/index.pug')
  .pipe(pug())
  .pipe(gulp.dest('../../'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

gulp.task('sass', function() {
  return gulp.src('../styles/index.sass')
    .pipe(sass())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(autoprefixer({
        browsers: ['last 10 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('../../styles/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

var scripts_modules = ['../scripts/basic.js', '../scripts/filter.js']

gulp.task('scripts', function() {
  return gulp.src(scripts_modules)
    .pipe(concat('index.js'))
    .pipe(uglify())
    .pipe(gulp.dest('../../scripts/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '../..'
    },
  })
})

gulp.task('watch', ['browserSync', 'sass', 'pug', 'scripts'], function (){
  gulp.watch(['../styles/**/*.sass', '../styles/**/*.css'], ['sass']); 
  gulp.watch('../pages/**/*.pug', ['pug']); 
  gulp.watch('../scripts/**/*.js', ['scripts']); 
});