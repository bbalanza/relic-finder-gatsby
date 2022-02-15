exports.config = {
  user: process.env.SELENIUM_GRID_USERNAME || 'brauliobalanza_1UiyJf',
  key: process.env.SELENIUM_GRID_ACCESS_KEY || 'mSyFf1GTtqwyMcSznoyv',

  updateJob: false,
  specs: [
    './mocha/test/specs/default.js'
  ],
  exclude: [],

  capabilities: [{
    browserName: 'Chromium',
    osVersion: '10.0',
    device: 'Samsung Galaxy S20',
    local: 'false',
    realMobile: 'true',
    name: 'single_test',
    build: 'Mocha Testing'
  }],

  logLevel: 'warn',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  host: 'hub-cloud.browserstack.com',

  before: function () {
    var chai = require('chai');
    global.expect = chai.expect;
    chai.Should();
  },
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },

  // Code to mark the status of test on BrowserStack based on the assertion status
  afterTest: function (test, context, { error, result, duration, passed, retries }) {
    if(passed) {
      browser.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Assertions passed"}}');
    } else {
      browser.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "At least 1 assertion failed"}}');
    }
  }
}