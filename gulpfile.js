const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');


//compile sass
gulp.task('sass', function(){
    var processors = [
        autoprefixer({ browsers: ['cover 99.5% in US'], flexbox: "no-2009" })
    ];
    return gulp.src(['src/sass/*.sass'])
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});

//watch and serve
gulp.task('serve', ['sass'], function(){
    browserSync.init({
        browser: 'C:\\Program Files\\Firefox Developer Edition\\firefox.exe',
        server: './src'
    });

    gulp.watch(['src/sass/*.sass'], ['sass']);
    gulp.watch(['src/*.html']).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);