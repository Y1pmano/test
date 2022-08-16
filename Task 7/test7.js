require("chromedriver");
const {Capabilities, Builder, By, until, Key,} = require('selenium-webdriver');
let chrome = Capabilities.chrome();
let driver = new Builder().withCapabilities(chrome).build();
const assert = require('assert');

describe('Test that checks if aimprosoft.com main page can be opened', function () {

    it('TEST', async function () {

        await driver.get('http://www.google.com/ncr');
        await driver.findElement(By.css("[class='gLFyf gsfi']")).sendKeys('aimprosoft', Key.RETURN);
        await driver.wait(until.titleContains('aimprosoft'), 100000);
        await driver.findElement(By.css('a[href="https://www.aimprosoft.com/"]')).click();
        let titleText = await driver.findElement(By.xpath('//*[(contains(text(), "Enterprise software"))]')).getText();
        assert.equal('Enterprise software development company', titleText)
        await driver.close()

    })
})
