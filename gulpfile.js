var gulp = require('gulp'),
    inject = require('gulp-inject'),
    clean = require('gulp-clean'),
    bowerFiles = require('main-bower-files');

var paths = {
    srcJs: 'app/**/*.js',
    destJs: 'dist/js',
    srcHtml: ['app/**/*.html', '!app/index.html'],
    destHtml: 'dist/html',
    srcCss: 'app/**/*.css',
    destCss: 'dist/css',
    srcIndex: 'app/index.html',
    destIndex: 'dist'
};

gulp.task('default', ['build-index']);

gulp.task('build-js', ['clean'], function () {
    return gulp.src(paths.srcJs)
        .pipe(gulp.dest(paths.destJs));
});

gulp.task('build-html', function () {
    return gulp.src(paths.srcHtml)
        .pipe(gulp.dest(paths.destHtml));
});

gulp.task('build-css', function () {
    return gulp.src(paths.srcCss)
        .pipe(gulp.dest(paths.destCss));
});

gulp.task('build-index', ['build-js', 'build-html', 'build-css'], function () {
    return gulp.src(paths.srcIndex)
        .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower'}))
        .pipe(inject(gulp.src(paths.destJs + '/**/*.js', {read: false})))
        .pipe(inject(gulp.src(paths.destCss + '/**/*.css', {read: false})))
        .pipe(gulp.dest(paths.destIndex));
});

gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});