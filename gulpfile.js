const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const Server = require('karma').Server;
const livereload = require('gulp-livereload');
const st = require('st');
const http = require('http');

gulp.task('babel:debug', () => {
  return gulp.src('src/**/*.js').
  pipe(sourcemaps.init()).
  pipe(babel()).
  pipe(sourcemaps.write()).
  pipe(gulp.dest('dist/')).
  pipe(livereload());
});

gulp.task('babel:prod', () => {
  return gulp.src('src/**/*.js').
  pipe(babel()).
  pipe(uglify()).
  pipe(gulp.dest('dist/')).
  pipe(livereload());
});

gulp.task('sass:debug', () => {
  return gulp.src('src/css/style.scss').
  pipe(sourcemaps.init()).
  pipe(sass().on('error', sass.logError)).
  pipe(sourcemaps.write()).
  pipe(gulp.dest('dist/css')).
  pipe(livereload());
});

gulp.task('sass:prod', () => {
  return gulp.src('src/css/style.scss').
  pipe(sass({
    outputStyle: 'compressed'
  }).on('error', sass.logError)).
  pipe(gulp.dest('dist/css')).
  pipe(livereload());
});

gulp.task('clean', (done) => {
  return del(['dist/**/*']).then(() => done());
});

gulp.task('copy', () => {
  return gulp.src('src/**/*.!(js|scss)').
  pipe(gulp.dest('dist/')).
  pipe(livereload());
});

gulp.task('server', (done) => {
  http.createServer(
    st({
      path: `${__dirname}/dist`,
      index: 'index.html',
      cache: false
    })
  ).listen(8080, done);
});

gulp.task('watch', ['server'], () => {
  livereload.listen({
    basePath: `${__dirname}/dist`,
  });
  gulp.watch('src/**/*.js', ['babel:debug']);
  gulp.watch('src/**/*.scss', ['sass:debug']);
  gulp.watch('src/**/*.!(js|scss)', ['copy']);
});

gulp.task('test', (done) => {
  const s = new Server({
    configFile: `${__dirname}/karma.conf.js`
  }, done);
  s.start();
});

gulp.task('default', ['babel:prod', 'sass:prod', 'copy']);
