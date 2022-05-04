const { Browser } = require("selenium-webdriver")
const { Builder, By } = require("selenium-webdriver")
require('chromedriver')
let driver;
let url = "https://demoqa.com/browser-windows";


describe("Window handling using selenium", async () => {
    beforeEach(async()=>{
        driver = await new Builder().forBrowser('chrome').build();
    })
    it("New tab handling", async () => {
        await driver.get(url);
        const parentWindow = await driver.getWindowHandle();
        const parentTabTitle = await driver.getTitle();
        console.log("parent tab Title : ",parentTabTitle);

        await driver.findElement(By.id("tabButton")).click();

        let windows = await driver.getAllWindowHandles();
        console.log("windows : ",windows);

        await driver.switchTo().window(windows[1]);
        let secondTabTitle = await driver.getTitle();
        console.log("Second tab Title : ", secondTabTitle );

        const headerText = await driver.findElement(By.id('sampleHeading')).getText();
        console.log("Second tab header Text : ", headerText);

        await driver.switchTo().window(parentWindow);
        const buttonText = await driver.findElement(By.id('tabButton')).getText();
        console.log("buttonText : ", buttonText)
    })
    it("new window handling", async()=>{
        await driver.get(url);

          const parent = await driver.getWindowHandle();
          const parentTabTitle = await driver.getTitle();
          console.log("parent tab Title : ",parentTabTitle);
  
          await driver.findElement(By.id("windowButton")).click();
  
          let windows = await driver.getAllWindowHandles();
          console.log("windows : ",windows);
  
          await driver.switchTo().window(windows[1]);
          let secondTabTitle = await driver.getTitle();
          console.log("Second tab Title : ", secondTabTitle );

          await driver.sleep(2000)
  
          const headerText = await driver.findElement(By.id('sampleHeading')).getText();
          console.log("Second tab header Text : ", headerText);

          await driver.switchTo().window(parent);
          const buttonText = await driver.findElement(By.id('windowButton')).getText();
          console.log("buttonText : ", buttonText)
    })
    afterEach(async ()=>{
        await driver.quit();
    })
})