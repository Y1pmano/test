const { CucumberJSAllureFormatter } = require("allure-cucumberjs");
const { AllureRuntime } = require("allure-cucumberjs");

function Reporter(options) {
  return new CucumberJSAllureFormatter(
    options,
    new AllureRuntime({ resultsDir: "./allure-results" }),
    {}
  );
}
Reporter.prototype = Object.create(CucumberJSAllureFormatter.prototype);
Reporter.prototype.constructor = Reporter;

exports.default = Reporter;


///var/lib/jenkins/workspace/docker-task-12/allure-results
//./allure-results