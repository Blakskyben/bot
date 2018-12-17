const { Builder, By, Key, until } = require('selenium-webdriver');
let category = null;
category = "Jackets";
category = category.toLowerCase();
let item = null;
item = "GORE-TEX 700-Fill Down Parka";
let color = null;
color = "Black"
async function main() {
    let driver = new Builder().forBrowser('chrome').build();

    driver.get('https://supremenewyork.com');

    driver.findElement(By.className('shop_link')).click();
    //begin get to shop/cat
    let element0 = await driver.wait(until.elementLocated(By.xpath("//*[contains(@href,'http://www.supremenewyork.com/shop/all')]", 10000)));
    await element0.click();
    let element1 = await driver.wait(until.elementLocated(By.xpath("//*[contains(text(),'"+category+"')]", 100)));
    await element1.click();
    //end of get to shop/cat
    //--------------------------------------------------------------
    //start of select item (bugged code starts below and ends at end of select item.)
    let element2 = await driver.wait(until.elementLocated(By.xpath("//article/div/a[contains(text(),'"+item+"') and //article/div/a[contains(text(),'"+color+"']",100)));
    element2.click();
    //end of select item
}

main();
