const webdriver = require('selenium-webdriver');
const { until } = require('selenium-webdriver');
const { By } = require('selenium-webdriver');

const username = SELENIUM_GRID_USERNAME;
const accessKey = SELENIUM_GRID_ACCESS_KEY;
const gridUrl = SELENIUM_GRID_URL;

const capabilities = {
  'browserName': 'chrome',
  'browser_version': 'latest-beta',
  'os': 'Windows',
  'os_version': '10',
  'build': 'browserstack-build-1',
  'name': 'Parallel test 1'
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

describe('webdriver', () => {
  let driver;
  beforeAll(async () => {
    console.log('http://' + username + ':' + accessKey + '@' + gridUrl)
    driver = new webdriver.Builder()
      .usingServer(
        'http://' + username + ':' + accessKey + '@' + gridUrl
      )
      .withCapabilities(capabilities)
      .build();
    await driver.get('http://www.google.com');
  }, 30000);

  afterAll(async () => {
    await driver.quit();
  }, 40000);

  test('test', async () => {
   const inputField = await driver.findElement(webdriver.By.name("q"));
    await inputField.sendKeys("BrowserStack", webdriver.Key.ENTER); // this works on desktop browsers
    try {
      await driver.wait(webdriver.until.titleMatches(/BrowserStack/i), 5000);
    } catch (e) {
      await inputField.submit(); // this takes care of submit in mobile browsers
    } 
  }, 35000);
});
