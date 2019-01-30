var gulp = require( 'gulp' ) ;
var nunjucks = require('gulp-nunjucks');
var COMPILE = {
    SRC: '/src/**.html',
    DEST: '/dist'
} ;
gulp.task( 'render', function() {
    gulp.src( COMPILE.SRC )
        .pipe( nunjucks.compile() )
        .pipe( gulp.dest( COMPILE.DEST ) ) ;
} ) ;