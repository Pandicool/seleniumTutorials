const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');
let driver;

describe("Handling 3 different waits" , async ()=>{
    before(async () =>{
        driver = await new Builder().forBrowser('chrome').build();
    })
    it("implicit wait", async () =>{
        await driver.get("https://demoqa.com/elements/");
        await driver.manage().setTimeouts( { implicit: 1000 } ); 
        await driver.findElement(By.xpath("(//div[@class='header-right'])[1]")).click();
        await driver.findElement(By.xpath("(//*[@class='text'])[1]")).click();
    })
    it("Explicit wait", async () => {
        await driver.get("https://demoqa.com/elements/");
        await driver.wait(until.elementLocated(By.xpath("(//div[@class='header-right'])[1]")), 30000);
        await driver.findElement(By.xpath("(//div[@class='header-right'])[1]")).click();
        await driver.findElement(By.xpath("(//*[@class='text'])[1]")).click();
    })
    it("Fluent wait", async () => {
        await driver.get("https://demoqa.com/elements/");
        await driver.wait(until.elementLocated(By.xpath("(//div[@class='header-right'])[1]")), 30000, 'Timed out after 30 seconds', 5000);
        await driver.findElement(By.xpath("(//*[@class='text'])[1]")).click();
    })
    after( async () => {
        await driver.quit();
    })
})