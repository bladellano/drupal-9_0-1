const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const livereload = require('gulp-livereload'); 
const uglify = require('gulp-uglifyjs');
const pngquant = require('imagemin-pngquant');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');

// Specify the Source files
const SRC_JS        = './lib/*.js';
const SRC_TWIG      = './**/**/*.twig';
const SRC_SCSS      = './scss/*.scss'; //?! './scss/*.scss' Toda a pasta.
const DEST_JS       = './js';
const DEST_CSS      = './css';

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
    gulp.src(SRC_JS)
        .pipe(uglify('main.js'))
        .pipe(gulp.dest(DEST_JS))
});

// Tarefa para compilar arquivos SCSS
function compileSass() {
    return gulp.src(SRC_SCSS)
        .pipe(sass()) // Compila o SCSS para CSS
        // .pipe(concat('style.css')) // Junta todos os arquivos compilados em style.css
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest(DEST_CSS))
        .pipe(livereload()); // Ativa o livereload após a compilação
}

// Tarefa para compilar arquivos JS
function compileJS() {

    return gulp.src(SRC_JS)
        .pipe(uglify('main.js'))
        .pipe(gulp.dest(DEST_JS))
        .pipe(livereload());
}

function reloadFiles() {
    return gulp.src(SRC_TWIG)
        .pipe(livereload());
}

// Tarefa de watch para observar alterações
function watch() {
    livereload.listen(); // Inicia o servidor livereload
    gulp.watch(SRC_SCSS, compileSass);
    gulp.watch(SRC_JS, compileJS);
    gulp.watch(SRC_TWIG, reloadFiles);
}

// Tarefa padrão que inicia a tarefa de watch
gulp.task('watch', watch);
