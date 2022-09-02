require("chromedriver");
const assert = require('assert');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { Capabilities, Builder, By, Key, until } = require('selenium-webdriver');
let chrome = Capabilities.chrome();
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 10000);

let driver;
Before(function () {
  driver = new Builder().withCapabilities(chrome).build();
})

After(function () {
  driver.quit();
});

Given('I visit Kashkick login website', async function () {
  await driver.get('https://www.kashkick.com/login.php')
});



When('I click Header Logo', async function () {
  await driver.findElement(By.className("img-fluid")).click();
});

Then('I should be returned on Kashkick main page', async function () {
  let titleText = await driver.findElement(By.xpath('//*[(contains(text(), "Greatest Reward"))]')).getText();
        assert.equal('Cash is the Greatest Reward!', titleText)
});




When('I click Footer Logo', async function () {
  await driver.findElement(By.className("img-fluid d-block mb-3 lazy")).click()
});

Then('I should be returned to Kashkick main page', async function () {
  let titleText = await driver.findElement(By.xpath('//*[(contains(text(), "Greatest Reward"))]')).getText();
  assert.equal('Cash is the Greatest Reward!', titleText)
});





When('I click Forgot password button1', async function () {
  await driver.findElement(By.className('hoverLight')).click()
});

When('I fill in Forgot password with valid email field', async function () {
  await driver.findElement(By.name("Email")).sendKeys('gafurovstanislav@gmail.com');
});

When('I click Request Password Reset Link1', async function () {
  await driver.findElement(By.name('Login')).click()
});

Then('Im succesfully redirected to Login page', async function () {
  let currentUrl = await driver.getCurrentUrl()
  assert.equal('https://www.kashkick.com/login.php', currentUrl)
});




When('I click Forgot password button2', async function () {
  await driver.findElement(By.className('hoverLight')).click()
});

When('I fill in Forgot password with unknown email', async function () {
  await driver.findElement(By.name("Email")).sendKeys('gafurov123@gmail.com');
});

When('I click Request Password Reset Link2', async function () {
  await driver.findElement(By.name('Login')).click()
});

Then('Message is not sent', async function () {
  let alertText = await driver.findElement(By.xpath('//*[(contains(text(), "We can not find"))]')).getText();
  assert.equal('We can not find your email address in our active subscribers list.', alertText)
});




When('I click Forgot password button3', async function () {
  await driver.findElement(By.className('hoverLight')).click()
});

When('I click Request Password Reset Link3', async function () {
  await driver.findElement(By.name('Login')).click()
});

Then('Alert message that email field is empty is shown', async function () {
  let alertText = await driver.findElement(By.xpath('//*[(contains(text(), "Invalid"))]')).getText();
  assert.equal('Invalid email address format.', alertText)
});




When('I click Forgot password button4', async function () {
  await driver.findElement(By.className('hoverLight')).click()
});

When('I fill in Forgot password field with any email', async function () {
  await driver.findElement(By.name("Email")).sendKeys('gafurov123@gmail.com');
});

When('I clear the Forgot password texfield', async function () {
  await driver.findElement(By.name('Email')).clear()
});

When('I click on empty space of the website', async function () {
  await driver.findElement(By.className('col-xl-4 col-lg-5')).click()
});

Then('I see the Forgot password placeholder text - Enter your Email', async function () {
  let placeholderText = await driver.findElement(By.css('[placeholder="Enter Your Email"]')).getAttribute("placeholder");
  assert.equal('Enter Your Email', placeholderText)
});



When('I enter <email> as {string}', async function (string) {
  await driver.findElement(By.name("Email")).sendKeys(string);
});

When('I enter <password> as {string}', async function (string) {
  await driver.findElement(By.name("Password")).sendKeys(string);
});

When('I click on Sign In button', async function () {
  await driver.findElement(By.name('Login')).click()
});

Then('I am Logged in', async function () {
  let currentUrl = await driver.getCurrentUrl()
  assert.equal('https://www.kashkick.com/sub/', currentUrl)
});




When(/^I enter email ([^"]*)/, async function (string) {
  await driver.findElement(By.name("Email")).sendKeys(string);
});

When(/^I enter password ([^"]*)/, async function (string) {
  await driver.findElement(By.name("Password")).sendKeys(string);
});

When('I click on Sign In button1', async function () {
  await driver.findElement(By.name('Login')).click()
});

Then('I am not Logged in', async function () {
    let currentUrl = await driver.getCurrentUrl()
  assert.notEqual('https://www.kashkick.com/sub/', currentUrl)
});




When('I enter  invalid <email> as {string}', async function (string) {
  await driver.findElement(By.name("Email")).sendKeys(string);
});

When('I enter invalid  <password> as {string}', async function (string) {
  await driver.findElement(By.name("Password")).sendKeys(string);
});

When('I click on Sign In button and after it I clear email and password fields', async function () {
  await driver.findElement(By.name('Login')).click()
  await driver.findElement(By.name('Email')).clear()
  await driver.findElement(By.name('Password')).clear()
});

When('I enter email2 <email> as {string}', async function (string) {
  await driver.findElement(By.name("Email")).sendKeys(string);
});

When('I enter password2 <password> as {string}', async function (string) {
  await driver.findElement(By.name("Password")).sendKeys(string);
});

When('I click on Sign in again', async function () {
  await driver.findElement(By.name('Login')).click()
});

Then('I am Logged in2', async function () {
    let currentUrl = await driver.getCurrentUrl()
    assert.equal('https://www.kashkick.com/sub/', currentUrl)
});



// When(/^I provide below information during registration$/, async function (table) {
// });

// Then('I submit the details', async function (table) {
// });

// Then('I am Logged in2', async function () {
// });
