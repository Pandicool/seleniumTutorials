const { By, Key, Builder, until } = require("Selenium-webdriver");
require("Chromedriver");
let driver;
let selector = {
    iphoneLink:"a[aria-label='Buy iPhone 13 Pro']",
    iphoneBuy:"tradeIn",
    iphonePincode:"form-textbox-input",
    // isSmartphonebtn:"[data-autom='choose-tradein-brand-check-option-1']",
    isSmartphonebtn : "(//div[@class ='rc-dimension-multiple column large-6 small-6 form-selector'])[1]",
    serialNumber:"//input[@class='form-textbox-input']",
    serialApplyBtn : "[data-autom='Apply']",
    turnOnOption:"[data-autom='choose-tradein-question-1-option-2']",
    chooseModel:"Galaxy Note9 - Up to $90",
    chooseCapacity:"128GB",
    purchaseOption:"Pay in full",
}


describe('@first test@', async () => {
    beforeEach(async () => {
        driver = await new Builder().forBrowser("chrome").build()
    });
    it.skip("apple.com", async () => {
        await driver.get("https://www.apple.in");
        await driver.findElement(By.css(selector.iphoneLink)).click();
        await driver.findElement(By.id(selector.iphoneBuy)).click();
        // await driver.wait(until.elementLocated(By.className(selector.iphonePincode)), 30000);
        await driver.findElement(By.className(selector.iphonePincode)).sendKeys("600059");
        // await driver.wait(until.elementLocated(By.className(selector.isSmartphonebtn)), 3000);
        await driver.findElement(By.xpath(selector.isSmartphonebtn)).click();
        // await driver.wait(until.elementLocated(By.xpath(selector.serialNumber)), 30000);
        // let element = driver.findElement(By.xpath(selector.serialNumber));
        // driver.executeScript("arguments[0].scrollIntoView()", element);
        await driver.findElement(By.xpath(selector.serialNumber)).sendKeys("F2LSQKPVHFY0");
        await driver.findElement(By.className(selector.serialApplyBtn)).click();
        await driver.findElement(By.className(selector.chooseModel)).click();
        await driver.findElement(By.className(selector.chooseCapacity)).click();
        await driver.findElement(By.className(selector.purchaseOption)).click();
    })

    it("apple test", async () => {
        await driver.get("https://www.apple.in");
        await driver.findElement(By.css(selector.iphoneLink)).click();
        await driver.findElement(By.id(selector.iphoneBuy)).click();
        await driver.sleep(000)
        await driver.findElement(By.className(selector.iphonePincode)).sendKeys("600059");
        await driver.sleep(2000)
        await driver.findElement(By.xpath(selector.isSmartphonebtn)).click();
        await driver.sleep(2000)
        await driver.findElement(By.xpath(selector.serialNumber)).sendKeys("F2LSQKPVHFY0");
        await driver.sleep(2000)
        await driver.findElement(By.css(selector.serialApplyBtn)).click();
        await driver.sleep(2000)
        await driver.findElement(By.css(selector.turnOnOption)).click();
        await driver.findElement(By.className(selector.chooseModel)).click();
        await driver.findElement(By.className(selector.chooseCapacity)).click();
        await driver.findElement(By.className(selector.purchaseOption)).click();
    })
    afterEach(async () => {
        await driver.sleep(5000);
        await driver.quit()
    });

})