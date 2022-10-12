const DriverSetup = require('./driver_setup'); 


class BasePage{
    constructor(){
        this.driver = new DriverSetup('chrome', false, 'http://localhost:4444').webdriver;

    }
}

module.exports = BasePage;
