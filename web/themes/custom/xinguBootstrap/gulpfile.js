const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const livereload = require('gulp-livereload'); // Importe o gulp-livereload
const uglify = require('gulp-uglifyjs');
const pngquant = require('imagemin-pngquant');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('imagemin', function () {
    return gulp.src('./images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./images'));
});

gulp.task('uglify', function () {
    gulp.src('./lib/*.js')
        .pipe(uglify('main.js'))
        .pipe(gulp.dest('./js'))
});

// Tarefa para compilar arquivos SCSS
function compileSass() {
    return gulp.src('./scss/*.scss')
        .pipe(sass()) // Compila o SCSS para CSS
        .pipe(concat('style.css')) // Junta todos os arquivos compilados em style.css
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('./css'))
        .pipe(livereload()); // Ativa o livereload após a compilação
}

// Tarefa para compilar arquivos JS
function compileJS() {

    return gulp.src('./lib/*.js')
        .pipe(uglify('main.js'))
        .pipe(gulp.dest('./js'))
        .pipe(livereload());
}

function reloadFiles() {
    return gulp.src('./**/**/*.twig')
        .pipe(livereload());
}

// Tarefa de watch para observar alterações
function watch() {
    livereload.listen(); // Inicia o servidor livereload
    gulp.watch('./scss/*.scss', compileSass);
    gulp.watch('./lib/*.js', compileJS);
    gulp.watch('./**/**/*.twig', reloadFiles);
}

// Tarefa padrão que inicia a tarefa de watch
gulp.task('watch', watch);
