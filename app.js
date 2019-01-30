var express = require( 'express' ) ;
var nunjucks = require( 'nunjucks' ) ;
var app = express() ;
var port = 3000;

var PATH_TO_TEMPLATES = '.' ;
nunjucks.configure( PATH_TO_TEMPLATES, {
    autoescape: true,
    express: app
} ) ;


app.get( '/', function( req, res ) {
    return res.render( 'index.html' ) ;
} ) ;

app.get( '/company/:company', function( req, res ) {
    var data = {
        company: req.params.company
    }
    return res.render( 'company.html', data ) ;
} ) ;

app.get( '/data', function( req, res ) {
    var data = {
        firstName: 'Andy',
        lastName: 'Neale'
    } ;
    return res.render( 'data.html', data ) ;
} ) ;



app.listen( port, () => {
    console.log(`Running in ${port}`)
} ) ;