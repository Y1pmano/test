const { By, Key, until } = require('selenium-webdriver');
const BasePage = require('./basepage')



class LoginPage extends BasePage{

    goToUrl(theURL){
        this.driver.get(theURL);
    }

    async headerLogoClickOn(){
        return await this.driver.findElement(By.className("navbar-brand logo-link")).click();
    }

    async footerLogoClickOn(){
        await this.driver.findElement(By.css('a[href="https://kashkick.com"]')).click();
    }

    async getLoginPageText(){
       return await this.driver.findElement(By.xpath('//*[(contains(text(), "Greatest Reward"))]')).getText();
    }

    async getCurrentPageUrl(){
       return await this.driver.getCurrentUrl();
    }

    async footerLogoClickOn(){
        return await this.driver.findElement(By.className("navbar-brand logo-link")).click();
    }
    
    async forgotPsswrdBtnClickOn(){
        return await this.driver.findElement(By.className('hoverLight')).click();
    }

    async emailFillIn(email){
        await this.driver.findElement(By.name("Email")).sendKeys(email);
    }

    async psswrdFillIn(password){
        await this.driver.findElement(By.name("Password")).sendKeys(password);
    }

    async requestPsswrdBtnClickOn(){
        await this.driver.findElement(By.className('forgot-password__btn')).click()
    }

    async signInBtnClickOn(){
        await this.driver.findElement(By.name('Login')).click();
    }

    async getSuccessPsswrdRequestText(){
        return await this.driver.findElement(By.xpath('//*[(contains(text(), "Please look for our"))]')).getText();
    }

    async getAlertPsswrdRequestText(){
        return await this.driver.findElement(By.xpath('//*[(contains(text(), "We can not find"))]')).getText();
    }

    async getAlertEmptyPsswrdRequestText(){
        return await this.driver.findElement(By.xpath('//*[(contains(text(), "is required"))]')).getText();
    }
    async clearEmailField(){
        await this.driver.findElement(By.name('Email')).clear();
    }
    async clearPsswrdField(){
        await this.driver.findElement(By.name("Password")).clear();
    }

    async emptySpaceClickOn(){
        await this.driver.findElement(By.className('col-md-6 col-xl-4')).click();
    }

    async getPlaceholderAttrbt(){
        return await this.driver.findElement(By.css('[placeholder="Enter Your Email"]')).getAttribute("placeholder");
    }




    


    














}


  module.exports = new LoginPage();
