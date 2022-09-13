const Webdriver = require('./webdriver'); 


class BasePage{
    constructor(){
        this.driver = new Webdriver().webdriver;
    }
}

module.exports = BasePage;

