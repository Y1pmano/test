const DriverSetup = require('./driver_setup'); 


class BasePage{
    constructor(){
        this.driver = new DriverSetup('chrome', false, 'http://localhost:4444').webdriver;

    }
}

module.exports = BasePage;




























// const WebDriver = require('./driver_setup'); 


// class BasePage{
//     constructor(){
//         this.driver = new WebDriver('firefox', false).webdriver;

//     }
// }

// module.exports = BasePage;
