'use strict';

const { src, dest, watch, series } = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

exports.less = function () {
    return src('./src/less/main.less')
        .pipe(less())
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('./dist'));
};

exports.watchLess = function () {
    watch('./src/less/*.less', series('less'));
};





// //Using Plugins
// var LessAutoprefix = require('less-plugin-autoprefix');
// var autoprefix = new LessAutoprefix({browsers: ['last 2 versions']});
//
// return gulp.src('./src/less/*.less')
//     .pipe(less({
//         plugins: [autoprefix]
//     }))
//     .pipe(gulp.dest('./public/css'));


// //Using Plugins
// var sourcemaps = require('gulp-sourcemaps');
//
// gulp.src('./less/**/*.less')
//     .pipe(sourcemaps.init())
//     .pipe(less())
//     .pipe(sourcemaps.write('./maps'))
//     .pipe(gulp.dest('./public/css'));
//


// //concat-css
// var gulp = require('gulp');
// var concatCss = require('gulp-concat-css');
//
// gulp.task('default', function () {
//     return gulp.src('assets/**/*.css')
//         .pipe(concatCss("styles/bundle.css"))
//         .pipe(gulp.dest('out/'));
// });


// //gulpwatchLess
// var gulp = require('gulp');
// var watchLess = require('gulp-watch-less');
// var less = require('gulp-less');
//
// gulp.task('default', function () {
//     return gulp.src('src/less/*.less')
//         .pipe(watchLess('less/file.less'))
//         .pipe(less())
//         .pipe(gulp.dest('dist'));
// });