const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload
const babel = require('gulp-babel')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const browserify = require('browserify')

gulp.task('create', () => {
	return browserSync.init({
		server : {
			baseDir : './'
		},
		port : 3333
	})
})

gulp.task('watch', () => {
	gulp.watch('./src/*.js', ['es6-es5', 'browserify']).on('change', reload)
	gulp.watch('./index.html').on('change', reload)
})
gulp.task('browserify', function() {
	return browserify({
				debug : true
			})
			.add("./es6.js")
			.bundle()
			.pipe(source('bundle.js'))
			.pipe(buffer())
			.pipe(gulp.dest('./'))
})
gulp.task('es6-es5', function() {
	return gulp.src('./src/*.js')
		.pipe(babel({
			presets: ['es2015', 'stage-3'],
			plugins : ['transform-runtime']
		}))
		.pipe(gulp.dest('./'))
})

gulp.task('default', [ 'create', 'watch' ])