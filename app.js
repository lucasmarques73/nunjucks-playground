var express = require( 'express' ) ;
var nunjucks = require( 'nunjucks' ) ;
var controllers = require('./controllers/controller')
var app = express() ;
var port = 3000;


var PATH_TO_TEMPLATES = 'views' ;
nunjucks.configure( PATH_TO_TEMPLATES, {
    autoescape: true,
    express: app
} ) ;


app.get( '/', controllers.home.get) ;

app.get( '/company/:company', controllers.company.get) ;

app.get( '/data',  controllers.data.get) ;

app.listen( port, () => {
    console.log(`Running in ${port}`)
} ) ;