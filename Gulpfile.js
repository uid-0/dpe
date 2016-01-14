"use strict";

var browserify = require('browserify')
	, tsify = require('tsify')
	, gulp = require('gulp')
	, source = require('vinyl-source-stream')
	, uglify = require("gulp-uglify")
	, concat = require("gulp-concat")
	, sourcemaps = require("gulp-sourcemaps")
	, buffer = require('vinyl-buffer')
	, header = require('gulp-header')
	, jade = require('gulp-jade')
	, sass = require('gulp-sass')
	, watch = require('gulp-watch');

var license = require("fs").readFileSync("./LICENSE")
var pkg = require("./package.json")

var banner = [
	pkg.name + " " + pkg.version + " " + pkg.codename,
	"Copyright (C) " + new Date().getFullYear() + " " + pkg.author,
	"",
	license
].join("\n").split("\n").map(function(i) { return " * " + i; }).join("\n");;

gulp.task('browserify', function() {
	var vfs = browserify('./canvas.ts')
		.plugin(tsify, {noImplicitAny: false})
		.bundle()
		.pipe(source("app.js"))

	vfs
		.pipe(buffer())
		.pipe(sourcemaps.init())
//	.pipe(uglify())
		.pipe(sourcemaps.write("."))
		.pipe(header("/*\n" + banner + "\n */\n"))
		.pipe(gulp.dest('dist'));
});

gulp.task('sass', function () {
	gulp.src('./sass/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(header("/*\n" + banner + "\n */\n"))
		.pipe(gulp.dest('./dist'));
});

gulp.task('jade', function() {
	gulp.src("jade/*.jade")
		.pipe(jade())
		.pipe(header("<!--\n" + banner + "\n-->\n"))
		.pipe(gulp.dest("dist"));
})

gulp.task('watch', function() {
	watch("jade/*.jade", function() { gulp.start("jade"); })
	watch("sass/**/*.scss", function() { gulp.start("sass"); })
	watch("lib/**/*.js", function() { gulp.start("browserify"); })
	watch("canvas.js", function() { gulp.start("browserify"); })
});

gulp.task('default', ['jade', 'browserify', 'sass']);
gulp.task('w', ['default', 'watch']);
