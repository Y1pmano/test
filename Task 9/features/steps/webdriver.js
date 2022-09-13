 const { Capabilities, Builder } = require('selenium-webdriver');

 let chromeCapabilities = Capabilities.chrome();

class Webdriver{
    constructor(){
        this.webdriver = new Builder().withCapabilities(chromeCapabilities).forBrowser('chrome').build();
        this.webdriver.manage().setTimeouts({implicit: 10000});
        this.webdriver.manage().deleteAllCookies();

    }
}

module.exports = Webdriver;