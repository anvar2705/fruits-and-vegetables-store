const gulp = require('gulp'); //создается константа gulp, которая подтягивает модуль gulp
const sass = require('gulp-sass')(require('sass')); //создается константа sass, которая подтягивает модуль gulp-sass
const browser_sync = require('browser-sync').create(); //создается константа browser_sync, которая подтягивает модуль browser-sync
//browser-sinc позволит нам автоматически обновлять страницу в браузере


function style() {
    return gulp.src('./scss/**/*.scss') //для всех файлов в папке scss и во всех вложенных папках (**) расширения .scss
        .pipe(sass())               //выполнить конвертацию в sass?
        .pipe(gulp.dest('./css'))   //указываем, куда мы хотим положить сконвертированный файл
        .pipe(browser_sync.stream()) //функция для автообновления браузера
}

function watch() {                           //Создаем функцию, которая будет следить за изменениями в файле scss и
    browser_sync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch('./scss/**/*.scss', style);      //конвертировать в css автоматически, запуская функцию style
    gulp.watch('./*.html').on('change', browser_sync.reload); //автоматический перезапуск после изменения файлов *.html
    //в корневой директории
}

exports.style = style                   //Экспортируем функцию, чтобы ее запустить
exports.watch = watch

//Далее необходимо запустить функцию в терминале: >>gulp watch