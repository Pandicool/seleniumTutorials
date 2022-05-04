const { Builder } = require('selenium-webdriver')
const DataDriven = require('data-driven');
const {sampleTestData} = require('../testData/sampleTestData');
require('chromedriver');
let driver;

describe('Test data driven test', async () => {
    beforeEach(async()=> {
        driver = await new Builder().forBrowser('chrome').build();
    })
    DataDriven(sampleTestData, async () => {
        it('visit different website using data driven framework', async (testData) => {
            await driver.get(testData.url)
            const title = await driver.getTitle();
            console.log("Title : ", title);
        })
    })
    afterEach(async () =>{
        await driver.close();
    })
})