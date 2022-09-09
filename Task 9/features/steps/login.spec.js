require("chromedriver");
const assert = require('assert');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { Capabilities, Builder, By, Key, until } = require('selenium-webdriver');
const loginpage = require('./login.refs');
let chromeCapabilities = Capabilities.chrome();
const { setDefaultTimeout } = require('@cucumber/cucumber');
const baseUrl = ('https://kashkick.com/login');
setDefaultTimeout(60 * 10000);



// After(function () {
//   loginpage.driver.quit();
// });

Given('I visit Kashkick login website', function () {
  loginpage.goToUrl(baseUrl);
});

When('I click on Header Logo', function () {
  loginpage.headerLogoClick();
});

Then('I should be returned to Kashkick main page', async function () {
  let titleText = await loginpage.getPageTitleText()
  assert.equal('Cash is the Greatest Reward!', titleText)
});

// Then('I should be returned to Kashkick main page', async function () {
//   let titleText = await driver.findElement(By.xpath('//*[(contains(text(), "Greatest Reward"))]')).getText();
//   assert.equal('Cash is the Greatest Reward!', titleText)
// });



// When('I click on Header Logo', async function () {
//   await driver.findElement(By.className("navbar-brand logo-link")).click();
// });

// Then('I should be returned to Kashkick main page', async function () {
//   let titleText = await driver.findElement(By.xpath('//*[(contains(text(), "Greatest Reward"))]')).getText();
//   assert.equal('Cash is the Greatest Reward!', titleText)
// });




// When('I click on Header Logo', async function () {
//   await driver.findElement(By.className("navbar-brand logo-link")).click();
// });

// Then('I should be returned to Kashkick main page', async function () {
//   let titleText = await driver.findElement(By.xpath('//*[(contains(text(), "Greatest Reward"))]')).getText();
//   assert.equal('Cash is the Greatest Reward!', titleText)
// });




// When('I click on Footer Logo', async function () {
//   await driver.findElement(By.css('a[href="https://kashkick.com"]')).click()
// });

// Then('I should be returned to Kashkick main page2', async function () {
//   let currentUrl = await driver.getCurrentUrl()
//   assert.equal('https://kashkick.com/', currentUrl)
// });





// When('I click on Forgot password button1', async function () {
//   await driver.findElement(By.className('hoverLight')).click()
// });

// When('I fill in Forgot password with valid email field', async function () {
//   await driver.findElement(By.name("Email")).sendKeys('gafurovstanislav@gmail.com');
// });

// When('I click on Request Password Reset Link1', async function () {
//   await driver.findElement(By.className('forgot-password__btn')).click()
// });

// Then('Im succesfully redirected to Login page', async function () {
//   let successText = await driver.findElement(By.xpath('//*[(contains(text(), "Please look for our"))]')).getText();
//   assert.equal('Please look for our message in your mailbox and follow the link to change your password.', successText)
// });




// When('I click on Forgot password button2', async function () {
//   await driver.findElement(By.className('hoverLight')).click()
// });

// When('I fill in Forgot password with unknown email', async function () {
//   await driver.findElement(By.name("Email")).sendKeys('stanislav123321@gmail.com');
// });

// When('I click on Request Password Reset Link2', async function () {
//   await driver.findElement(By.className('forgot-password__btn')).click()
// });

// Then('I get the alert that Message is not sent', async function () {
//   let alertText = await driver.findElement(By.xpath('//*[(contains(text(), "We can not find"))]')).getText();
//   assert.equal('We can not find any user with given Email.Please provide valid Email.', alertText)
// });




// When('I click on Forgot password button3', async function () {
//   await driver.findElement(By.className('hoverLight')).click()
// });

// When('I click on Request Password Reset Link3', async function () {
//   await driver.findElement(By.className('forgot-password__btn')).click()
// });

// Then('Alert message that email field is empty is displayed', async function () {
//   let alertText = await driver.findElement(By.xpath('//*[(contains(text(), "is required"))]')).getText();
//   assert.equal('The email field is required.', alertText)
// });




// When('I click on Forgot password button4', async function () {
//   await driver.findElement(By.className('hoverLight')).click()
// });

// When('I fill in Forgot password field with any email', async function () {
//   await driver.findElement(By.name("Email")).sendKeys('gafurov123@gmail.com');
// });

// When('I clear the Forgot password texfield', async function () {
//   await driver.findElement(By.name('Email')).clear()
// });

// When('I click on empty space of the website', async function () {
//   await driver.findElement(By.className('col-md-6 col-xl-4')).click()
// });

// Then('I see the Forgot password placeholder text - Enter your Email', async function () {
//   let placeholderText = await driver.findElement(By.css('[placeholder="Enter Your Email"]')).getAttribute("placeholder");
//   assert.equal('Enter Your Email', placeholderText)
// });




// When('I enter <email> as {string}', async function (string) {
//   await driver.findElement(By.name("Email")).sendKeys(string);
// });

// When('I enter <password> as {string}', async function (string) {
//   await driver.findElement(By.name("Password")).sendKeys(string);
// });

// When('I click on Sign In button', async function () {
//   await driver.findElement(By.name('Login')).click()
// });

// Then('I am Logged in', async function () {
//   let currentUrl = await driver.getCurrentUrl()
//   assert.equal('https://kashkick.com/sub/offers', currentUrl)
// });




// When(/^I enter email ([^"]*)/, async function (string) {
//   await driver.findElement(By.name("Email")).sendKeys(string);
// });

// When(/^I enter password ([^"]*)/, async function (string) {
//   await driver.findElement(By.name("Password")).sendKeys(string);
// });

// When('I click on Sign In button1', async function () {
//   await driver.findElement(By.name('Login')).click()
// });

// Then('I am not Logged in', async function () {
//   let currentUrl = await driver.getCurrentUrl()
//   assert.notEqual('https://www.kashkick.com/sub/offers', currentUrl)
// });




// When('I enter invalid <email> as {string}', async function (string) {
//   await driver.findElement(By.name("Email")).sendKeys(string);
// });

// When('I enter invalid  <password> as {string}', async function (string) {
//   await driver.findElement(By.name("Password")).sendKeys(string);
// });

// When('I clear email and password fields', async function () {
//   await driver.findElement(By.name('Email')).clear()
//   await driver.findElement(By.name('Password')).clear()
// });

// When('I enter email2 <email> as {string}', async function (string) {
//   await driver.findElement(By.name("Email")).sendKeys(string);
// });

// When('I enter password2 <password> as {string}', async function (string) {
//   await driver.findElement(By.name("Password")).sendKeys(string);
// });

// When('I click on Sign in again', async function () {
//   await driver.findElement(By.name('Login')).click()
// });

// Then('I am Logged in2', async function () {
//   let currentUrl = await driver.getCurrentUrl()
//   assert.equal('https://kashkick.com/sub/offers', currentUrl)
// });




// When(/^User enters valid user credentials$/, async function (dataTable) {
//   let rows = dataTable.rowsHash();
//   let emailRow = rows.userEmail;
//   let passwordRow = rows.userPassword;
//   await driver.findElement(By.name("Email")).sendKeys(emailRow);
//   await driver.findElement(By.name("Password")).sendKeys(passwordRow);
// });

// When('I click on Sign in button2', async function () {
//   await driver.findElement(By.name('Login')).click()
// });
// Then('I am Logged in3', async function () {
//   let currentUrl = await driver.getCurrentUrl()
//   assert.equal('https://kashkick.com/sub/offers', currentUrl)
// });



