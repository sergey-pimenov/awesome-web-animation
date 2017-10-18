var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    webpackStream = require('webpack-stream'),
    webpack = require('webpack'),
    flatten = require('gulp-flatten'),
    autoprefixer = require('gulp-autoprefixer'),
   	browserSync = require('browser-sync').create();

// Production
var uglify = require('gulp-uglify'),
    pump = require('pump'),
    cleanCSS = require('gulp-clean-css'),
    htmlmin = require('gulp-htmlmin');

///// Compile Sass /////
gulp.task('compileSass', function () {
  return gulp.src('src/index.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/styles'))
    .pipe(browserSync.reload({
	    stream: true
	  }))
});


/// Compile JS /////
gulp.task('compileJS', function() {
    return gulp.src('src/index.js')
    .pipe(webpackStream({
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015']
            }
          }
        ],
      },
      output: {
        filename: 'index.js',
      }
    }, webpack))
    .pipe(gulp.dest('assets/scripts'))
    .pipe(browserSync.reload({
      stream: true
    }))
});


///// Build index //////
gulp.task('assetsIndex', function() {
  return gulp.src(['src/index.html'])
  .pipe(gulp.dest('./'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

///// Live reload //////
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
});


///// Script transporter //////
gulp.task('scriptTrans', function() {
  return gulp.src(['src/libs/scripts/**/*.js'])
  .pipe(gulp.dest('assets/scripts'))
  .pipe(browserSync.reload({
    stream: true
  }))
});


///// Data transporter //////
gulp.task('dataTrans', function() {
  return gulp.src(['data/**/*.json'])
  .pipe(gulp.dest('assets/data'))
  .pipe(browserSync.reload({
    stream: true
  }))
});


///// Image transporter //////
gulp.task('imageTrans', function() {
  return gulp.src(['src/resources/images/**/*.{jpg,png,gif,svg}'])
  .pipe(flatten())
  .pipe(gulp.dest('assets/images'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

///// Fonts transporter //////
gulp.task('fontsTrans', function() {
  return gulp.src(['src/resources/fonts/**/*.{eot,woff2,woff,ttf,svg}'])
  .pipe(flatten())
  .pipe(gulp.dest('assets/fonts'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

///// Minify JS /////
gulp.task('MinifyJS', function (cb) {
  pump([
        gulp.src('assets/scripts/index.js'),
        uglify(),
        gulp.dest('assets/scripts')
    ],
    cb
  );
});

///// Minify CSS /////
gulp.task('minifyCSS', function () {
  return gulp.src('assets/styles/index.css')
    .pipe(cleanCSS({debug: true}, function(details) {
      console.log(details.name + ': ' + details.stats.originalSize);
      console.log(details.name + ': ' + details.stats.minifiedSize);
    }))
  .pipe(gulp.dest('assets/styles'));
});

///// Set prefixes /////
gulp.task('setPrefixes', function(){
  return gulp.src('assets/styles/index.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('assets/styles'))
});

///// Minify HTML /////
gulp.task('minifyHTML', function() {
  return gulp.src('index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./'));
});


///// Watch /////
gulp.task('default', [
                      'browserSync',
                      'compileSass',
                      'assetsIndex',
                      'compileJS',
                      'scriptTrans',
                      'imageTrans',
                      'fontsTrans',
                      'dataTrans'
                      ],
  function() {
  	gulp.watch(['src/**/*.sass', 'src/index.sass'], ['compileSass']);
    gulp.watch(['src/**/*.js', 'src/index.js'], ['compileJS']);
  	gulp.watch(['src/index.html'], ['assetsIndex']);
    gulp.watch(['src/libs/scripts/**/*.js'], ['scriptTrans']);
    gulp.watch(['src/**/*.{jpg,png,gif,svg}'], ['imageTrans']);
    gulp.watch(['src/**/*.{eot,woff2,woff,ttf,svg}'], ['fontsTrans']);
  	gulp.watch(['data/**/*json'], ['dataTrans']);
});


///// Production /////

gulp.task('production', ['MinifyJS', 'minifyCSS', 'minifyHTML', 'setPrefixes']);