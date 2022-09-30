const Webdriver = require('./driver_setup'); 


class BasePage{
    constructor(){
        this.driver = new Webdriver('chrome', true).webdriver;

    }
}

module.exports = BasePage;
