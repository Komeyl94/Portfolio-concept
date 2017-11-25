const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');

gulp.task('sass', function () {
	return gulp.src('app/scss/styles.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'));
});

gulp.task('autoprefix', () =>
	gulp.src('app/css/styles.css')
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	.pipe(gulp.dest('app/css'))
);

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('app/js/*.js', ['scripts']);
    gulp.watch(['app/scss/styles.scss', 'app/scss/main.scss', 'app/scss/Base/*.scss'], ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'autoprefix', 'watch']);