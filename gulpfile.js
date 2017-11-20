var gulp = require('gulp');

var sass = require('gulp-sass');

gulp.task('sass', function () {
	return gulp.src('app/scss/styles.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('app/js/*.js', ['scripts']);
    gulp.watch(['app/scss/styles.scss', 'app/scss/main.scss', 'app/scss/Base/*.scss'], ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'watch']);