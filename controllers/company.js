exports.get = (req, res) => {
    var data = {
        company: req.params.company
    }
    return res.render( 'company.html', data ) ;
}