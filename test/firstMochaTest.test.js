const { Builder , By, keys } = require('selenium-webdriver')
require('chromedriver');

describe('First mocha test', async ()=>{
    it('visit google website', async ()=>{
        let driver = await new Builder().forBrowser('chrome').build();
        await driver.get("https://www.paypal.com");
        await driver.quit();
    })
})