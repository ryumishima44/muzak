var gulp = require('gulp'),
    // sass = require('gulp-ruby-sass'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;
    del = require('del');


gulp.task('css',function(){
    gulp.src('./src/css/main.scss')
    .pipe(sass())
    .pipe(rename({suffix: '.min'}))
    .pipe(autoprefixer('last 2 version'))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'))
    .pipe(notify({ message: 'Styles task complete' }))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('js',function(){
    gulp.src('./src/js/**.js')
        .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(notify({ message: 'Scripts task complete' }))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('img', function() {
  return gulp.src('src/img/**/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('dist/img'))
    .pipe(notify({ message: 'Images task complete' }))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('html', function() {
    gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('clean', function() {
    return del(['dist/css', 'dist/js', 'dist/img']);
});

gulp.task('serve',function(){
    browserSync.init({
        server:{
            baseDir:'./dist'
        }
    });
    gulp.watch('./src/css/*.scss',['css']);
    gulp.watch('./src/**/*.js',['js']);
    gulp.watch('./src/img/**/*',['img']);
    gulp.watch('./src/**/*.html',['html']);
});


gulp.task('default',['clean','css','js','img','html','serve']);



// gulp.task('styles', function() {
//   return sass('src/css/*.scss', { style: 'expanded' })
//     .pipe(autoprefixer('last 2 version'))
//     .pipe(rename({suffix: '.min'}))
//     .pipe(cssnano())
//     .pipe(gulp.dest('dist/css'))
//     .pipe(notify({ message: 'Styles task complete' }))
//     .pipe(browserSync.stream());;
// });

// gulp.task('scripts', function() {
//     gulp.src('src/js/**/*.js')
//     .pipe(concat('main.js'))
//     .pipe(rename({suffix: '.min'}))
//     .pipe(uglify())
//     .pipe(gulp.dest('dist/js'))
//     .pipe(notify({ message: 'Scripts task complete' }));
// });





// gulp.task('serve',function(){
//     browserSync.init({
//         server:"dist"
//     })

//     gulp.watch('src/css/**/*.scss', ['styles']);
//     gulp.watch('src/js/**/*.js', ['scripts']);
//     gulp.watch('src/img/**/*', ['images']);
//     gulp.watch('src/**/*.html,src/js/**/*.js').on('change',browserSync.reload);
// });

// gulp.task('default', ['clean'], function() {
//     gulp.start('styles', 'scripts', 'images');
// });