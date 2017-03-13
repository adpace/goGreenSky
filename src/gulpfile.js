/**
 * Created by adpac on 3/11/2017.
 */
// ============from DS ============
'use strict';
//should correspond to what's in package.json
var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    jslint      = require('gulp-jslint'),
    browserSync = require('browser-sync').create(),
    uglify      = require('gulp-uglify'),
    gulpIf      = require('gulp-if');
// gutil   = require('gulp-util'),
// notify  = require('gulp-notify'),
// autoprefixer = require('gulp-autoprefixer'),
// include = require('gulp-include'),
// concat = require('gulp-concat'),
// changed = require('gulp-changed'),
// plumber = require('gulp-plumber'),
// rename = require("gulp-rename"),
// minify = require('gulp-minifier'),
// buildDirectory = '../build';

gulp.task('hello', function() {
    console.log('hello Ari');
});

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.+(scss|sass)') // Gets all files ending with .scss in app/scss
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    })
});

gulp.task('lint', function() {
    gulp.src('./*.js')
        .pipe(jslint())
        .pipe(jslint.reporter('default'));
});
//
// gulp.task('scripts', function() {
//     gulp.src(['./js/main.js','./components/**/*.js','./templates/pages/**/*.js'])
//         .pipe(plumber())
//         .pipe(include())
//         .pipe(concat('main.js'))
//         .pipe(gulp.dest(buildDirectory + '/js'));
// });
//
// gulp.task('libscripts', function() {
//     gulp.src(['./js/lib/**/*.js'])
//         .pipe(plumber())
//         .pipe(include())
//         .pipe(gulp.dest(buildDirectory + '/js/lib'));
//
//     gulp.src(['./scss/lib/**/*.css'])
//         .pipe(plumber())
//         .pipe(include())
//         .pipe(gulp.dest(buildDirectory + '/styles/lib'));
// });
//
// gulp.task('styles', function() {
//     gulp.src(['./scss/style.scss','./components/**/*.scss'], {base: 'src'})
//         .pipe(concat('./temp.scss'))
//         .pipe(gulp.dest('scss'))
//         .pipe(sass({onError: function(e) { console.log(e); } }))
//         .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
//         .pipe(rename('main.css'))
//         .pipe(gulp.dest(buildDirectory + '/styles'));
//
// });
//
// gulp.task('partials', function() {
//     gulp.src(['./components/**/*.jade'])
//         .pipe(plumber())
//         .pipe(jade({
//             pretty: true
//         }))
//         .pipe(gulp.dest(buildDirectory + '/components'));
// });
//
// gulp.task('copy-robots', function() {
//     gulp.src('./templates/robots.txt')
//         .pipe(changed('../templates/robots.txt'))
//         .pipe(gulp.dest(buildDirectory + '/'));
// });
//
// gulp.task('copy-data', function() {
//     gulp.src('./data/*.json')
//         .pipe(changed('./data/*.json'))
//         .pipe(gulp.dest(buildDirectory + '/data'));
// });
//
// // gulp.task('copy-lib', function() {
// //   gulp.src('./js/lib/*')
// //     .pipe(changed('./js/lib/*'))
// //     .pipe(gulp.dest(buildDirectory + '/js/lib'));
// // });
//
// gulp.task('copy-media', function() {
//     gulp.src('./media/**/*')
//         .pipe(changed('./media/**/*'))
//         .pipe(gulp.dest(buildDirectory + '/media'));
// });
//
// //this needs to be run manually when you want to minify - 'gulp minify'
// gulp.task('minify', function() {
//     gulp.src(buildDirectory + '/**/*').pipe(minify({
//         minify: true,
//         collapseWhitespace: true,
//         conservativeCollapse: true,
//         minifyJS: true,
//         minifyCSS: true
//     })).pipe(gulp.dest(buildDirectory + '/'));
// });
//
//
gulp.task('watch', ['browserSync', 'sass'], function() {
//
    gulp.task('watch', function() {
        gulp.watch('app/**/*.scss', ['sass']);
        // Reloads the browser whenever HTML or JS files change
        gulp.watch('app/*.html', browserSync.reload);
        gulp.watch('app/**/*.js', browserSync.reload);
    });

//
//     //scripts
//     gulp.watch([  './js/*.js',
//                   './components/**/*.js',
//                   './templates/pages/**/*.js'
//     ], ['scripts']);
//
});
//
gulp.task('default', ['hello', 'sass', 'browserSync', 'watch']);
//
//
