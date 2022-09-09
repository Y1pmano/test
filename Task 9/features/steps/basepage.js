const webdriver = require('selenium-webdriver'); 
const { Capabilities, Builder, By, Key, until } = require('selenium-webdriver');
let chromeCapabilities = Capabilities.chrome();


class BasePage{
    constructor(){
        this.driver = new Builder().withCapabilities(chromeCapabilities).forBrowser('chrome').build();
        this.driver.manage().setTimeouts({implicit: 10000});
    }

    goToUrl(theURL){
        this.driver.get(theURL);
    }
}

module.exports = BasePage;

