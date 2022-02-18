
const sleep = require('util').promisify(setTimeout)

describe("Test scanner ", () => {
    it("Renders Scanner", async () => {
        const reader = await $('//*[@id="reader"]/video')
        await sleep(3000)
        expect(reader).toExist()
    });
});