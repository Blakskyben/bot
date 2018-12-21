const { Builder, By, Key, until } = require('selenium-webdriver');
let category = null;
category = "jackets";
category = category.toLowerCase();
let item = null;
item = "Supreme®/Schott® Down Leather Vest Puffy Jacket";
let color = null;
color = "Silver"
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
    
    for (var i = 0; i < 100; i++) {
      console.log('hii');
     if (driver.findElement(By.xpath("//*[@id='container']/article["+i+"]/div/h1/a/*[text()[normalize-space(.)='"+item+"']")) && driver.findElement(By.xpath("//*[@id='container']/article["+i+"]/div/p/a/*[text()[normalize-space(.)='"+color+"']"))){
       driver.findElement(By.xpath("//*[@id='container']/article["+i+"]/div/h1/a")).click();
     } else {
       continue;
     }
    }
  } catch(err) {
    console.log(err);
    driver.quit();
  }
}

main();
