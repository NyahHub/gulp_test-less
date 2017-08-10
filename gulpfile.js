//  var requireDir = require('require-dir');

//  requireDir('./gulp/tasks', { recurse: true});

var gulp = require('gulp');
var less = require('gulp-less');
var cleancss = require('gulp-clean-css');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');

gulp.task('testLess',function(){
	gulp.src('./src/less/app/a.less')
		.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
		.pipe(less())
		.pipe(cleancss())
		.pipe(gulp.dest('./testbuild/css'));
});

gulp.task('testWatch',function(){
	gulp.watch('./src/less/app/a.less',['testLess']);
});