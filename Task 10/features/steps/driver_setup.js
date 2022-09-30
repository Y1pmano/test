const { Builder, Capabilities } = require('selenium-webdriver');

class Webdriver {
    constructor(browserName, isLocal) {
      this.browserName = browserName;
      this.isLocal = isLocal;
      this.webdriver = this.createDriver()
    }
  
    createDriver() {
      let caps = new Capabilities();
      caps.setPageLoadStrategy("eager");
      const builder = new Builder();
      if(!this.isLocal) { builder.usingServer('http://localhost:4444/wd/hub') }
      return builder
        .withCapabilities(caps)
        .forBrowser(this.browserName)
        .build();
    }
  }
  
  module.exports = Webdriver;