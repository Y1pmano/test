require("chromedriver");
require("geckodriver");
const assert = require('assert');
const { Given, When, Then, AfterAll, After, Status } = require('@cucumber/cucumber');
const loginPage = require('./login.refs');
const { setDefaultTimeout } = require('@cucumber/cucumber');
const baseUrl = ('https://kashkick.com/login');
setDefaultTimeout(60 * 10000);




AfterAll(function () {
  loginPage.driver.quit();
});

After( async function (testCase) {
  let world = this;
  if (testCase.result.status === Status.FAILED) {
      return loginPage.driver.takeScreenshot().then(function(screenSave) {
          world.attach(screenSave, 'base64:image/png');
      });
  }
})

Given('I visit Kashkick login website', async function () {
  loginPage.goToUrl(baseUrl);
});

When('I click on Forgot password button', async function () {
  await loginPage.clickOnForgotPasswordButton();
});

When('I enter email as {string}', async function (string) {
  await loginPage.fillInEmail(string)
});

When('I enter password as {string}', async function (string) {
  await loginPage.fillInPassword(string);
});

When('I click on Request Password Reset Link', async function () {
  await loginPage.clickOnRequestPasswordButton();
});

When('I click on Sign In button', async function () {
  await loginPage.clickOnSignInButton();
});

Then('I am Logged in', async function () {
  let currentUrl = await loginPage.getCurrentPageUrl()
  assert.equal('https://kashkick.com/sub/offers', currentUrl)
});

When('I click on Header Logo', async function () {
  await loginPage.clickOnHeaderLogo();
});

Then('I am returned to Kashkick main page', async function () {
  let currentUrl = await loginPage.getCurrentPageUrl()
  assert.equal('https://kashkick.com/', currentUrl)
});

When('I click on Footer Logo', async function () {
  await loginPage.clickOnFooterLogo();
});

Then('I am returned to website main page', async function () {
  let titleText = await loginPage.getLoginPageText()
  assert.equal('Cash is the Greatest Reward!', titleText)
});

Then('I get the alert message that email was sent', async function () {
  let successText = await loginPage.getAlertText()
  assert.equal('Please look for our message in your mailbox and follow the link to change your password.', successText)
});

Then('I get the alert that Message was not sent', async function () {
  let alertText = await loginPage.getAlertText()
  assert.equal('We can not find any user with given Email. Please provide valid Email', alertText)
});

Then('I get the alert message that email field is empty', async function () {
  let alertText = await loginPage.getAlertText()
  assert.equal('The email field is required.', alertText)
});

When('I clear the Forgot password texfield', async function () {
  await loginPage.clearEmailField();
});

When('I click on empty space of the website', async function () {
  await loginPage.clickOnEmptySpace();
});

Then('I see the Forgot password placeholder text - Enter your Email', async function () {
  let placeholderText = await loginPage.getPlaceholderAttribute()
  assert.equal('Enter Your Email', placeholderText)
});

When('I clear email and password fields', async function () {
  await loginPage.clearEmailField();
  await loginPage.clearPasswordField();
});

When(/^I enter Email credentials as ([^"]*)/, async function (string) {
  await loginPage.fillInEmail(string);
});

When(/^I enter Password credentials as ([^"]*)/, async function (string) {
  await loginPage.fillInPassword(string);
});

Then('I am not Logged in', async function () {
  let currentUrl = await loginPage.getCurrentPageUrl()
  assert.notEqual('https://www.kashkick.com/sub/offers', currentUrl)
});

When(/^I enter valid user's credentials$/, async function (dataTable) {
  let rows = dataTable.rowsHash();
  let emailRow = rows.userEmail;
  let passwordRow = rows.userPassword;
  await loginPage.fillInEmail(emailRow);
  await loginPage.fillInPassword(passwordRow);
});
