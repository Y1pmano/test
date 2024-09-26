const { By } = require('selenium-webdriver');
const BasePage = require('./basepage')



class LoginPage extends BasePage{

    goToUrl(theURL){
        this.driver.get(theURL);
    }

    async clickOnHeaderLogo(){
        return await this.driver.findElement(By.css('div[class="row"] div a svg')).click();
    }

    async clickOnFooterLogo(){
        await this.driver.findElement(By.css('a[href="https://kashkick.com"]')).click();
    }

    async getLoginPageText(){
       return await this.driver.findElement(By.xpath('//*[(contains(text(), "Greatest Reward"))]')).getText();
    }

    async getCurrentPageUrl(){
       return await this.driver.getCurrentUrl();
    }

    async clickOnForgotPasswordButton(){
        return await this.driver.findElement(By.className('hoverLight')).click();
    }

    async fillInEmail(email){
        await this.driver.findElement(By.name("Email")).sendKeys(email);
    }

    async fillInPassword(password){
        await this.driver.findElement(By.name("Password")).sendKeys(password);
    }

    async clickOnRequestPasswordButton(){
        await this.driver.findElement(By.className('forgot-password__btn')).click()
    }

    async clickOnSignInButton(){
        await this.driver.findElement(By.name('Login')).click();
    }

    async getAlertText(){
        return await this.driver.findElement(By.className('alert alert')).getText();
    }

    async clearEmailField(){
        await this.driver.findElement(By.name('Email')).clear();
    }
    async clearPasswordField(){
        await this.driver.findElement(By.name("Password")).clear();
    }

    async clickOnEmptySpace(){
        await this.driver.findElement(By.className('col-md-6 col-xl-4')).click();
    }

    async getPlaceholderAttribute(){
        return await this.driver.findElement(By.css('[placeholder="Enter Your Email"]')).getAttribute("placeholder");
    }
}

module.exports = new LoginPage();
