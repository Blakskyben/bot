const { Builder, By, Key, until } = require('selenium-webdriver');
let category = null;
category = "jackets";
category = category.toLowerCase();
let item = null;
item = "Leather";
let color = null;
color = "Black"
let size = null;
size = "XL"
async function main() {
  try{
    let driver = new Builder().forBrowser('chrome').build();

    driver.get('https://supremenewyork.com');

    driver.findElement(By.className('shop_link')).click();
    //begin get to shop/cat
    let element0 = await driver.wait(until.elementLocated(By.xpath("//*[contains(@href,'http://www.supremenewyork.com/shop/all')]", 10000)));
    await element0.click();
    let element1 = await driver.wait(until.elementLocated(By.xpath("//*[contains(text(),'"+category+"')]", 100)));
    await element1.click();

    for (var i = 1; i < 100; i++) {
     if (driver.findElement(By.xpath("/html/body/div[1]/div/article['"+i+"']/div/p/a[contains(text(),'"+color+"')]")) && driver.findElement(By.xpath("/html/body/div[1]/div/article['"+i+"']/div/h1/a[contains(text(),'"+item+"')]"))){
      let clikkk = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/article['"+i+"']/div/p/a[contains(text(),'"+color+"')]")));
      clikkk.click();
      break;
     } else {
       continue;
     }
    }
    await driver.wait(until.elementLocated(By.xpath("//*[@id='s']/option[contains(text(),'"+size+"')]"))).click();
  } catch(err) {
    console.log(err);
    await driver.quit();
  } finally {
    await driver.quit();
  }

}

main();
