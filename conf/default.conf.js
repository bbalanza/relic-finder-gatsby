const acceptPermissions = async() => {
    await sleep(2000);
    await browser.switchContext('NATIVE_APP')
    const permissionButton = $(".//android.widget.Button[@text='Allow']")
    permissionButton.click();
    await sleep(2000)
    await browser.switchContext('CHROMIUM')
}
const URL = 'https://relic-finder-pilot--staging-g5x5qtyx.web.app'
const sleep = require('util').promisify(setTimeout)

exports.config = {
  user: process.env.SELENIUM_GRID_USERNAME,
  key: process.env.SELENIUM_GRID_ACCESS_KEY,

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
    build: 'WebdriverIO Testing'
  },
  {
    browserName: 'Chromium',
    osVersion: '9.0',
    device: 'Samsung Galaxy S10e',
    local: 'false',
    realMobile: 'true',
    name: 'single_test',
    build: 'WebdriverIO Testing'
  }],

  logLevel: 'warn',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  host: 'hub-cloud.browserstack.com',

  before: async function () {
    require('expect-webdriverio');
    global.wdioExpect = global.expect;

    await browser.url(URL);
    await acceptPermissions();
  },
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },

  // Code to mark the status of test on BrowserStack based on the assertion status
  afterTest: function (test, context, { error, result, duration, passed, retries }) {
    if (passed) {
      browser.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Assertions passed"}}');
    } else {
      browser.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "At least 1 assertion failed"}}');
    }
  }
}