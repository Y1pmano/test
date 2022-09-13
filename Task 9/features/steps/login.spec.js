require("chromedriver");
const assert = require('assert');
const { Given, When, Then, AfterAll} = require('@cucumber/cucumber');
const loginPage = require('./login.refs');
const { setDefaultTimeout } = require('@cucumber/cucumber');
const baseUrl = ('https://kashkick.com/login');
setDefaultTimeout(60 * 10000);




AfterAll(function () {
  loginPage.driver.quit();
});


Given('I visit Kashkick login website', async function () {
  loginPage.goToUrl(baseUrl);
});




When('I click on Header Logo', async function () {
   await loginPage.headerLogoClickOn();
});

Then('I should be returned to Kashkick main page', async function () {
  let currentUrl = await loginPage.getCurrentPageUrl()
  assert.equal('https://kashkick.com/', currentUrl)
});



When('I click on Footer Logo', async function () {
  await loginPage.footerLogoClickOn();
});

Then('I should be returned to Kashkick main page2', async function () {
  let titleText = await loginPage.getLoginPageText()
  assert.equal('Cash is the Greatest Reward!', titleText)
});





When('I click on Forgot password button1', async function () {
  await loginPage.forgotPsswrdBtnClickOn();
});

When('I enter <email> as {string} with valid email', async function (string) {
  await loginPage.emailFillIn(string)
});

When('I click on Request Password Reset Link1', async function () {
  await loginPage.requestPsswrdBtnClickOn();
});

Then('Im succesfully redirected to Login page', async function () {
  let successText = await loginPage.getSuccessPsswrdRequestText()
  assert.equal('Please look for our message in your mailbox and follow the link to change your password.', successText)
});




When('I click on Forgot password button2', async function () {
  await loginPage.forgotPsswrdBtnClickOn();
});

When('I enter <email> as {string}', async function (string) {
  await loginPage.emailFillIn(string)
});

When('I click on Request Password Reset Link2', async function () {
  await loginPage.requestPsswrdBtnClickOn();
});

Then('I get the alert that Message is not sent', async function () {
  let alertText = await loginPage.getAlertPsswrdRequestText()
  assert.equal('We can not find any user with given Email. Please provide valid Email', alertText)
});




When('I click on Forgot password button3', async function () {
  await loginPage.forgotPsswrdBtnClickOn();
});

When('I click on Request Password Reset Link3', async function () {
  await loginPage.requestPsswrdBtnClickOn();
});

Then('Alert message that email field is empty is displayed', async function () {
  let alertText = await loginPage.getAlertEmptyPsswrdRequestText()
  assert.equal('The email field is required.', alertText)
});




When('I click on Forgot password button4', async function () {
  await loginPage.forgotPsswrdBtnClickOn();
});

When('I enter1 <email> as {string}', async function (string) {
  await loginPage.emailFillIn(string)
});

When('I clear the Forgot password texfield', async function () {
  await loginPage.clearEmailField();
});

When('I click on empty space of the website', async function () {
  await loginPage.emptySpaceClickOn();
});

Then('I see the Forgot password placeholder text - Enter your Email', async function () {
  let placeholderText = await loginPage.getPlaceholderAttrbt()
  assert.equal('Enter Your Email', placeholderText)
});




When('I enter2 <email> as {string}', async function (string) {
  await loginPage.emailFillIn(string);
});

When('I enter <password> as {string}', async function (string) {
  await loginPage.psswrdFillIn(string);
});

When('I click on Sign In button', async function () {
  await loginPage.signInBtnClickOn();
});

Then('I am Logged in', async function () {
  let currentUrl = await loginPage.getCurrentPageUrl();
  assert.equal('https://kashkick.com/sub/offers', currentUrl)
});




When(/^I enter email ([^"]*)/, async function (string) {
  await loginPage.emailFillIn(string);
});

When(/^I enter password ([^"]*)/, async function (string) {
  await loginPage.psswrdFillIn(string);
});

When('I click on Sign In button1', async function () {
  await loginPage.signInBtnClickOn();
});

Then('I am not Logged in', async function () {
  let currentUrl = await loginPage.getCurrentPageUrl()
  assert.notEqual('https://www.kashkick.com/sub/offers', currentUrl)
});




When('I enter invalid <email> as {string}', async function (string) {
  await loginPage.emailFillIn(string);
});

When('I enter invalid  <password> as {string}', async function (string) {
  await loginPage.psswrdFillIn(string);
});

When('I clear email and password fields', async function () {
  await loginPage.clearEmailField();
  await loginPage.clearPsswrdField();
});

When('I enter email2 <email> as {string}', async function (string) {
  await loginPage.emailFillIn(string);
});

When('I enter password2 <password> as {string}', async function (string) {
  await loginPage.psswrdFillIn(string);
});

When('I click on Sign in again', async function () {
  await loginPage.signInBtnClickOn();
});

Then('I am Logged in2', async function () {
  let currentUrl = await loginPage.getCurrentPageUrl()
  assert.equal('https://kashkick.com/sub/offers', currentUrl)
});




When(/^User enters valid user credentials$/, async function (dataTable) {
  let rows = dataTable.rowsHash();
  let emailRow = rows.userEmail;
  let passwordRow = rows.userPassword;
  await loginPage.emailFillIn(emailRow);
  await loginPage.psswrdFillIn(passwordRow);
});

When('I click on Sign in button2', async function () {
  await loginPage.signInBtnClickOn();
});

Then('I am Logged in3', async function () {
  let currentUrl = await loginPage.getCurrentPageUrl()
  assert.equal('https://kashkick.com/sub/offers', currentUrl)
});



