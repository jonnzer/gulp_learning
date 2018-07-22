var gulp = require('gulp');

gulp.task('default', function() {
	// 将你的默认的任务代码放在这
});

gulp.task('hello', function () {
	gulp.src('./source/one.js')
		.pipe(gulp.dest('./target'))
});

gulp.watch('./source/one.js',['hello'])
