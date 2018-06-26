var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var webserver = require('gulp-webserver');
//var browserSync = require( 'browser-sync' );
//var $ = require( 'gulp-load-plugins' )( {lazy: true} );

//gulp.task( 'styles', function () {
	// gulp.src( './app/sass/**/*.scss' )
		//.pipe( sass().on( 'error', sass.logError ) )
		//.pipe( gulp.dest( './app/css' ) )
		//.pipe( browserSync.reload( {stream: true} ) );
//} );

//style paths

//SCSS
var sassFiles = './src/css/sass/**/*.scss',
    cssDest = './src/css/';

gulp.task('styles', function(){
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});

//JS
var jsFiles='./src/js/es6/*.es6',
    jsDest='./src/js'
gulp.task('babel', function() {
  gulp.src(jsFiles)
        .pipe(babel())
        .pipe(gulp.dest(jsDest));
});

//WATCH
gulp.task('watch', function() {
  gulp.watch(['./*.*']);
  gulp.watch(sassFiles,['styles']);
  gulp.watch(jsFiles, ['babel']);
  //  gulp.watch(sassFiles,['styles']);
});

gulp.task('webserver', function() {
  gulp.src('./')
  .pipe(webserver({
    host: '0.0.0.0',
    livereload: true
    })
  );
});
gulp.task('default', ['watch', 'webserver']);
