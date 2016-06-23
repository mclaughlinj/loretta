var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var path = require('path');
var handlebars = require('gulp-handlebars');
var defineModule = require('gulp-define-module');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var insert = require('gulp-insert');
var concat = require('gulp-concat');
var merge = require('merge-stream');
var forever = require('forever');
var postcss      = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');

gulp.task('lint', function () {
  gulp.src('./**/*.js')
    .pipe(jshint());
});

gulp.task('sass', function () {
    gulp.src('./client/css/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
          errLogToConsole: true
        }))
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./client/css'));
});


gulp.task('templates', function(){

  var partials = gulp.src(['./views/partials/*.hbs'])
    .pipe(handlebars({
      handlebars: require('handlebars')
    }))
    .pipe(wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));', {}, {
      imports: {
        processPartialName: function(fileName) {
          // Escape the output with JSON.stringify
          return JSON.stringify(path.basename(fileName, '.js'));
        }
      }
    }));

  var templates = gulp.src(['./views/*.hbs','./views/partials/*.hbs'])
    .pipe(handlebars({
      handlebars: require('handlebars')
    }))
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'lg.templates',
      noRedeclare: true
    }))

    //return templates

    return merge(partials, templates)
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('client/templates/'));
});

gulp.task('develop', ['templates'], function () {
  nodemon({ script: './bin/www', ext: 'html js', ignore: ['ignored.js'] })
    .on('change', ['lint'])
    .on('restart', function () {
      console.log('restarted!')
    })
    .on('readable', function() { // the `readable` event indicates that data is ready to pick up
      this.stdout.pipe(fs.createWriteStream('output.txt'));
      this.stderr.pipe(fs.createWriteStream('err.txt'));
    })
  gulp.watch('./client/css/scss/*.scss', ['sass']);
  gulp.watch('./views/partials/*.hbs', ['templates']);
});

gulp.task('golive', function () {
  var foreverOptions = {
  };
  forever.start ('app.js',foreverOptions)
});

gulp.task('default', ['sass', 'templates', 'develop']);
gulp.task('start', ['sass', 'templates', 'golive']);
