const { assert } = require('console');

const sleep = require('util').promisify(setTimeout)
const URL = 'https://relic-finder-pilot--staging-g5x5qtyx.web.app'

const acceptPermissions = async() => {
    await sleep(2000);
    await browser.switchContext('NATIVE_APP')
    const permissionButton = $(".//android.widget.Button[@text='Block']")
    permissionButton.click();
    await sleep(2000)
    await browser.switchContext('CHROMIUM')
}

describe("Test scanner ", () => {
    it("Renders", async () => {
        await browser.url(URL);
        await acceptPermissions();
        const reader = await $('//*[@id="reader"]/video')
        await sleep(3000)
        console.log(reader)
        expect(reader).to.be.ok;
    });
});