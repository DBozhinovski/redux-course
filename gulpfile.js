var gulp = require('gulp');
var del = require('del');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var shell = require('gulp-shell');

var reload = browserSync.reload;

var processors = [
  autoprefixer({browsers: ['last 1 version']}),
  cssnext,
];

gulp.task('start', ['css'], function () {
  browserSync.init(
    {
      server: {
          baseDir: ['root'],
          routes: {
            '/system.js': 'node_modules/systemjs/dist/system.js',
            '/node_modules': 'node_modules',
            '/config.js': 'config.js',
            '/script': 'src/script',
            '/style': 'build/style'
          }
        },
      browser: 'google chrome',
    }
  );
  gulp.watch(["root/**/*.html"]).on('change', browserSync.reload);
  gulp.watch("src/script/**/*.js").on('change', browserSync.reload);
  gulp.watch(['src/style/**/*'], ['css']);
});

gulp.task('css', function () {

  return gulp.src('src/style/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss(processors))
      .pipe(gulp.dest('build/style'))
      .pipe(browserSync.stream());

});

gulp.task('publish', ['clean'], function (cb) {
  runSequence(
              'css',
              'bundle',
              'copy',
              cb);
});

gulp.task('copy', function () {
  gulp.src([
        'build/style/**/*.css'
        ],
        {base: 'build'})
      .pipe(gulp.dest('dist'));
  gulp.src([
        'root/**/*',
        '!root/**/*.html'
        ],
        {base: 'root'})
      .pipe(gulp.dest('dist'));
  gulp.src([
        'root/**/*.html',
        ])
      .pipe(useref())
      .pipe(gulp.dest('dist'));
});

gulp.task('bundle', shell.task(
    'node build.js'
  )
);

gulp.task('clean', ['clean-build', 'clean-dist']);
gulp.task('clean-build', del.bind(null, ['build'], {dot: true}));
gulp.task('clean-dist', del.bind(null, ['dist'], {dot: true}));
