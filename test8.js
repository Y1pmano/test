require("chromedriver");
const {Capabilities, Builder, By, until} = require('selenium-webdriver');
let chrome = Capabilities.chrome();
let driver = new Builder().withCapabilities(chrome).build();
const assert = require('assert');

describe('Test that compares prices', function () {

    it('TEST', async function () {

        await driver.get('https://www.bmwusa.com/');
        await driver.findElement(By.css('a[href="/build-your-own.html#/series/X3/sports-activity-vehicle"]')).click();
        await driver.wait(until.titleIs('Build Your Own – Engine and Drivetrain Options – BMW USA'), 10000);
        let price = await driver.findElement(By.xpath('(//a[@title="2023 BMW X3 xDrive30i"]/preceding-sibling::*)[2]')).getText();
        let numberedPrice = Number(price.replace(/[^0-9.-]+/g,""));
        assert.equal(47400, numberedPrice);
        await driver.quit()
        
    })

})