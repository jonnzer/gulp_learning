var gulp = require('gulp');

gulp.task('default', function() {
	// 将你的默认的任务代码放在这
	gulp.src('./source/*/*')
		.pipe(gulp.dest('./target'))
});

gulp.task('hello', function () {
	gulp.src('./source/one.js')
		.pipe(gulp.dest('./target'))
});

gulp.task('one', function (cb) {
	cb(console.log('one'))
})

gulp.task('two', ['one'], function () {
	console.log('two')
})

gulp.task('three', ['one','two'], function () {
	console.log('three')
})

// gulp three => (执行顺序 one two three)

gulp.watch('./source/*/*',['default'])

// dest 是不管有没有这个文件夹，都会往dest指定路径生成文件


