const {Builder,By,Key} = require('selenium-webdriver');
require('chromedriver');

let driver;

const visitUrl = async () => {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://www.google.com');
    await driver.quit();
}

const getTitle = async () => {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://www.google.com");
    let title = await driver.getTitle();
    console.log(title)
    await driver.quit();
}

const searchMocha = async () => {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://www.google.com');
    await driver.findElement(By.name('q')).sendKeys("mocha install",Key.RETURN);
    const title = await driver.getTitle();
    console.log(title);
    await driver.quit();
}


// visitUrl();
// getTitle();
searchMocha();
