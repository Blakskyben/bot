const { Builder, By, Key, until } = require('selenium-webdriver');
let category = null;
category = "jackets";
category = category.toLowerCase();
let item = null;
item = "GORE-TEX 700-Fill Down Parka";
let color = null;
color = "Black"
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

    let itemName = await driver.wait(until.elementLocated(By.xpath("//*[@id='container']/article/div/h1/a")));
    let itemColor = await driver.wait(until.elementLocated(By.xpath("//*[@id='container']/article/div/p/a")));

    for (var i = 0; i < itemName.length; i++) {
      if (itemName[i]==item && itemColor==color){
        findElement(By.xpath("//*[@id='container']/article'"+[i]+"'/div/h1/a")).click();
      } else {
        continue;
      }
    }
    //end of get to shop/cat
    //--------------------------------------------------------------
    //start of select item
    // let element2 = await driver.wait(until.elementLocated(By.linkText("Lime")));
    // element2.click();
    //end of select item
  } catch(err) {
    console.log(err);
    driver.quit();
  }
}

main();
