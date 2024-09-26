const { Builder, Capabilities } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const firefox = require("selenium-webdriver/firefox");
const osvar = process.platform;



const driverMapper = {
  firefox: firefox,
  chrome: chrome,
};

const capabitiesMapper = {
  firefox: Capabilities.firefox(),
  chrome: Capabilities.chrome(),
};

class Webdriver {
  constructor(browserName, isLocal, serverUrl) {
    this.browserName = browserName;
    this.isLocal = isLocal;
    this.serverUrl = serverUrl;
    this.webdriver = this.getDriver();
  }

  createBuilder(service) {
    let caps = capabitiesMapper[this.browserName];
    caps.setPageLoadStrategy("eager");

    const builder = new Builder().forBrowser(this.browserName);
    if (!this.isLocal) {
      builder.usingServer(this.serverUrl);
    }

    const builderWithService =
      this.browserName === "chrome"
        ? builder.setChromeService(service)
        : builder.setFirefoxService(service);

    return builderWithService
      .withCapabilities(caps)
      .forBrowser(this.browserName)
      .build();
  }

  getServicePath(selectedDriver) {
    if (osvar == "linux" && !selectedDriver.obj) {
      return this.browserName === "chrome"
        ? "./resources/chromedriver"
        : "./resources/geckodriver";
    }

    if (osvar == "win32" && !selectedDriver.obj) {
      return this.browserName === "chrome"
        ? "./resources/chromedriver.exe"
        : "./resources/geckodriver.exe";
    }
  }

  getService(selectedDriver) {
    return new selectedDriver.ServiceBuilder(this.getServicePath(selectedDriver));
  }

  getDriver() {
    const selectedDriver = driverMapper[this.browserName];
    const service = this.getService(selectedDriver);

    selectedDriver.obj = this.createBuilder(service);

    return selectedDriver.obj;
  }
}

module.exports = Webdriver;


