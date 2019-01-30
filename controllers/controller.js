var dataController = require('./data')
var homeController = require('./home')
var companyController = require('./company')

var controllers = {}

controllers.data = dataController;
controllers.home = homeController;
controllers.company = companyController;



module.exports = controllers