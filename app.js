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

    let itemCount = await driver.wait(until.elementLocated(By.xpath("//*[@id='container']/article",1000)));
    let itemName = await driver.wait(until.elementLocated(By.xpath("//*[@id='container']/article/div/h1/a",1000)));
    let itemColor = await driver.wait(until.elementLocated(By.xpath("//*[@id='container']/article/div/p/a",1000)));

    for (var i = 0; i < itemCount.length; i++) {
     if ("//*[@id='container']/article/div/h1/a/*[text()[normalize-space(.)='"+[i]+"']]"==item && "//*[@id='container']/article/div/p/a/*[text()[normalize-space(.)='"+[i]+"']]"==color){
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
