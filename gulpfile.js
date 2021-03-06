var gulp           = require('gulp'),
		gutil          = require('gulp-util' ),
		scss           = require('gulp-sass'),
		browserSync    = require('browser-sync'),
		concat         = require('gulp-concat'),
		uglify         = require('gulp-uglify'),
		cleanCSS       = require('gulp-clean-css'),
		rename         = require('gulp-rename'),
		del            = require('del'),
		imagemin       = require('gulp-imagemin'),
		htmlmin       = require('gulp-htmlmin'),
		cache          = require('gulp-cache'),
		autoprefixer   = require('gulp-autoprefixer'),
		bourbon        = require('node-bourbon'),
		ftp            = require('vinyl-ftp'),
		notify         = require("gulp-notify"),
		uncss 			= require('gulp-uncss');

// Скрипты проекта
gulp.task('scripts', function() {
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',

		'app/libs/grid3/flickity.pkgd.min.js',
		'app/libs/grid3/isotope.pkgd.min.js',
		'app/libs/grid3/modernizr.custom.js',

		'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js',

		'app/libs/owl-carousel/owl.carousel.min.js',
		'app/libs/focuspoint/jquery.focuspoint.min.js',
		'app/js/common.js',// Всегда в конце
		])
	.pipe(concat('scripts.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({stream: true}));
});



gulp.task('browser-sync', function() {
	browserSync({
		proxy:"argos2.loc/app/",
		notify: false
	});
});

gulp.task('scss', function() {
	return gulp.src('app/sass/**/*.scss')
	.pipe(scss({
		includePaths: bourbon.includePaths
	}).on("error", notify.onError()))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleanCSS())
	.pipe(gulp.dest('app/css'))
	.pipe(uncss({html: ['app/*.html']}))
	.pipe(browserSync.reload({stream: true}));
});
gulp.task('css', function() {
	return gulp.src('app/libs/**/*.css')
			.pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['scss', 'scripts', 'css', 'browser-sync'], function() {
	gulp.watch(['app/sass/**/*.scss', 'app/libs/**/*.scss'], ['scss']);
	gulp.watch('app/libs/**/*.css', ['css']);
	gulp.watch(['libs/**/*.js', 'app/js/common.js'], ['scripts']);
	gulp.watch('app/*.html', browserSync.reload);
});



gulp.task('imagemin', function() {
	return gulp.src('app/img/**/*')
	.pipe(imagemin([
				imagemin.gifsicle({interlaced: true}),
				imagemin.jpegtran({progressive: true, optimizationLevel: 5 }),
				imagemin.optipng({optimizationLevel: 5}),
				imagemin.svgo({plugins: [{removeViewBox: true}]})
	],
	{
		verbose: true
	}
	))
	.pipe(gulp.dest('dist/img'));
});


gulp.task('htmlmin', function() {
	return gulp.src('app/*.html')
			.pipe(htmlmin({collapseWhitespace: true}))
			.pipe(gulp.dest('dist'))
});


gulp.task('build', ['removedist', 'imagemin', 'scss', 'scripts', 'htmlmin'], function() {

	var buildFiles = gulp.src([
		'app/*.html',
		'app/.htaccess',
		'app/*.php',
		]).pipe(gulp.dest('dist'));

	var buildCss = gulp.src([
		'app/css/main.min.css',
		]).pipe(gulp.dest('dist/css'));

	var buildJs = gulp.src([
		'app/js/scripts.min.js',
		]).pipe(gulp.dest('dist/js'));

	var buildFonts = gulp.src([
		'app/fonts/**/*',
		]).pipe(gulp.dest('dist/fonts'));

});

gulp.task('deploy', function() {

	var conn = ftp.create({
		host:      'hostname.com',
		user:      'username',
		password:  'userpassword',
		parallel:  10,
		log: gutil.log
	});

	var globs = [
	'dist/**',
	'dist/.htaccess',
	];
	return gulp.src(globs, {buffer: false})
	.pipe(conn.dest('/path/to/folder/on/server'));

});



gulp.task('removedist', function() { return del.sync('dist'); });
gulp.task('clearcache', function () { return cache.clearAll(); });

gulp.task('default', ['watch']);

