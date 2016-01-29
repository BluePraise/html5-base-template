'use strict';
var gulp         = require('gulp');
var gutil        = require('gulp-util');
var notify       = require('gulp-notify');
var plumber      = require('gulp-plumber');

////////////////////
// Project start
////////////////////

// Bij het starten van het project gebruik je "gulp project-start"
// Deze taak wordt later nog gevuld door andere taken
gulp.task('verplaats', function () {
    // Kopieert bower fontawesome naar asset map
    gulp.src(['bower_components/font-awesome/fonts/*'])
        .pipe(gulp.dest('fonts/font-awesome'))
        .pipe( notify({ message: 'Fonts in font-awesome is verplaatst', onLast: true}) );
    gulp.src(['bower_components/font-awesome/scss/*'])
        .pipe(gulp.dest('sass/font-awesome'))
        .pipe( notify({ message: 'Sass bestanden zijn verplaatst', onLast: true}) );
    gulp.src(['bower_components/jquery/dist/jquery.min.js', 'bower_components/jquery/dist/jquery.min.map'])
        .pipe(gulp.dest('js/vendor'))
        .pipe( notify({ message: 'jQuery bestanden zijn verplaatst', onLast: true}) );
});

//////////////////////////////////
// Project afronding.
//////////////////////////////

gulp.task('build', ['compress'],function () {

    // Kopieert JS lib naar dist map
    gulp.src(['assets/js/lib/*'])
        .pipe(gulp.dest('dist/assets/js/lib'));

    // Kopieert fonts naar dit map
    gulp.src(['assets/fonts/font-awesome/*'])
        .pipe(gulp.dest('dist/assets/fonts/font-awesome'))
        .pipe( notify({ message: 'Project build compleet', onLast: true}) );

});
