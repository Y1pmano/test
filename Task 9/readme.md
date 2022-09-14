1. Firstly we have to install Node.Js. Ill explain how to do it on example of Windows. So these are the steps:
    1) Go to https://nodejs.org/en/download/ and choose for what operating system we want to get Node.js, in our example it will be Windows. We should not forget that we have to know what version of OS we have, whether it is 32 or 64-bit.
    2) After downloading we should install it.
    3) In order to reassure that Node.Js is installed, we can check it via command "node -v", that can be typed in the Windows terminal.
So why do we need Node.js? One of the main reasons, is that it allows us to execute and run scripts on our computer, not using a browser.

2. Secondly, after Node.js is succesfully installed to our OS,  we are to initialize a new project in our IDE. We should type "npm init" in the terminal of the IDE we are using. After that, we can choose some features, how to name our project, key words, description, name of the author, etc. After applying the last step, node_modules folder, package-lock.json file will be automatically created. 

3. In order to make tests based on webdriver we have to install selenium-webdriver via command "npm install selenium-webdriver" and chromedriver via command "npm install chromedriver". Selenium webdriver allows us to execute crossbrowser tests, and chromedriver allows us to execute them on Google Chrome browser. Of course we can choose any other browser to operate on, for this we will need another webdriver. We also have to install Cucumber framework as dev dependency with the command "npm install --save-dev @cucumber/cucumber". Cucumber  is a testing tool that supports Behavior Driven Development. It gves us aceess to write scripts in easier to understand and read way, so everyone, even a person far from development or testing can understand what is going on, what tests we are executing, and on what stage test has failed.  For easier work with writing tests we can install "Mocha" or "Chai". These are assertion libraries that give allowance to make testing, as they write it on their own website, "easier and fun". But they are not mandatory to install, it is all a matter of taste and own preferences.

4. After Node.js and all npm's that were described before, were installed, we have to create a folder of our project. Inside that folder we have to have at least 1 .js file, and 1 file with .feature extension. File with .feature extension is the file in which Cucumber tests are written. Also a good practice, is to create a .gitignore file, with "/node_modules" with it. It allows not to push files from node_modules folder. 

5. The last step is to integrate and import everything that we need for executing tests. These are mandatory commands that are needed to run a script:
    1) require("chromedriver"); - gives us acess to chromedriver;
    2) const assert = require('assert'); - gives us acess to command that accerts expected and actual results;
    3) const { Given, When, Then, Before, After } = require('@cucumber/cucumber'); - gives acess to keys that are provided via cucumber framework;
    4) const { Capabilities, Builder, By, Key, until } = require('selenium-webdriver'); - gives acess to default and custom keys that are provided via selenium-webdriver;
In order to run a test, we can use a selenium-webdriver command "npm test".

