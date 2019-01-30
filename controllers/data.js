exports.get = (req, res) => {
    var data = {
        firstName: 'Andy',
        lastName: 'Neale'
    } ;
    return res.render( 'data.html', data ) ;
}