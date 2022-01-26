const webdriver = require('selenium-webdriver');
const { until } = require('selenium-webdriver');
const { By } = require('selenium-webdriver');

const username = SELENIUM_GRID_USERNAME;
const accessKey = SELENIUM_GRID_ACCESS_KEY;
const gridUrl = SELENIUM_GRID_URL;

const capabilities = {
  "browserName": "Chromium",
  "osVersion": "9.0",
  "deviceName": "Samsung Galaxy S10e",
  "realMobile": "true",
  "local": "false",
  "projectName": "Relic Finder Scanner",
  "sessionName": "Scanner Initialization",
  "autoGrantPermissions": "true",
  'goog:chromeOptions': {
    'args': ["--use-fake-device-for-media-stream", "--use-fake-ui-for-media-stream"],
  }
};

const getElementById = async (driver, id, timeout = 2000) => {
  const el = await driver.wait(until.elementLocated(By.id(id)), timeout);
  return await driver.wait(until.elementIsVisible(el), timeout);
};

const getElementByName = async (driver, name, timeout = 2000) => {
  const el = await driver.wait(until.elementLocated(By.name(name)), timeout);
  return await driver.wait(until.elementIsVisible(el), timeout);
};

const getElementByXpath = async (driver, xpath, timeout = 2000) => {
  const el = await driver.wait(until.elementLocated(By.xpath(xpath)), timeout);
  return await driver.wait(until.elementIsVisible(el), timeout);
};

const sleep = require('util').promisify(setTimeout)

describe('Test the ', () => {
  let driver;
  beforeAll(async () => {
    try {
      driver = new webdriver.Builder()
        .usingServer(
          'http://' + username + ':' + accessKey + '@' + gridUrl
        )
        .withCapabilities(capabilities)
        .build();
      await driver.get('https://relic-finder-pilot--staging-y6sy1jhz.web.app/');
    } catch(e){
      driver.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "Test failed: scanner was not rendered on-screen."}}');
      throw e.message
    }
  }, 30000);

  afterAll(async () => {
    await driver.quit();
  }, 40000);

  test('test', async () => {
    try {
      const scanner = await getElementById(driver, 'reader', 4000);
      driver.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Test passed: scanner was rendered on-screen."}}');
    } catch (e) {
      driver.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "Test failed: scanner was not rendered on-screen."}}');
      throw e.message
    }
  }, 35000);
});
