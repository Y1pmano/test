const { By, Key, until } = require('selenium-webdriver');
const BasePage = require('./basepage')



class LoginPage extends BasePage{

    headerLogoClick(){
        this.driver.findElement(By.className("navbar-brand logo-link")).click();
    }

    footerLogoClick(){
        this.driver.findElement(By.css('a[href="https://kashkick.com"]')).click()
    }
    async getPageTitleText(){
        await this.driver.wait(until.elementLocated(By.xpath('//*[(contains(text(), "Greatest Reward"))]')), 5000)
       return this.driver.findElement(By.xpath('//*[(contains(text(), "Greatest Reward"))]')).getText();
        
    }

    
  }
  module.exports = new LoginPage();
