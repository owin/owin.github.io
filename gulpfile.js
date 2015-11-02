/**
 * Created by Scott on 9/10/2014.
 * Migrated to Gulp by Ryan Riley on 11/2/2015.
 */

var gulp = require('gulp');
var del = require('del');
var markdown = require('gulp-markdown');

gulp.task('clean', function () {
    return del(['html/**/*.html']);
});

gulp.task('default', ['clean'], function () {
    return gulp.src('spec/**/*.md')
        .pipe(markdown())
        .pipe(gulp.dest('html'));
});
