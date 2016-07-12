var gulp = require("gulp");
var less = require("gulp-less");
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task("build-styles", function() {
    gulp.src("src/bootstrap/bootstrap.a2docs.less")
        .pipe(less())
        .pipe(gulp.dest("dist"))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
    gulp.src("src/docstyle/styles.less")
        .pipe(less())
        .pipe(gulp.dest("dist"))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
    gulp.src("src/docstyle/styles.less")
        .pipe(less())
        .pipe(rename({suffix:'.test'}))
        .pipe(gulp.dest("../Angular/angular.io/public/docs/_examples/toh-5/ts"));
});