var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var path = require('path');

var paths = {
    scss: 'src/assets/sass/',
    css: 'css'
};

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('sass', function() {
    return gulp.src(path.join(paths.scss,'app.scss'))
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error',sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest(paths.css))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(path.join(paths.scss, '**/*.scss'), ['sass']);
});

gulp.task('default', ['sass','watch']);