var gulp         = require('gulp'),
    del          = require('del'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('delete', function () {
    return del.sync('dist');
});

gulp.task('prefix',function () {
   return gulp.src (['app/css/**/*.css', '!app/css/main.css.map'])
       .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
       .pipe(gulp.dest('app/css'));
});

gulp.task('build', ['prefix' ,'delete'], function () {
    var files = gulp.src(['app/**/*.*', '!app/css/main.css.map'])
        .pipe(gulp.dest('dist'));
});
