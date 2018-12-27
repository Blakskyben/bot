const { Builder, By, Key, until } = require('selenium-webdriver');
let category = null,
  item = null
  color = null
  size = null
  name = null,
  email = null,
  phone = null;

category = "tops";
category = category.toLowerCase();
item = "Knit Stripe";
color = "Navy";
size = "XL";
name = "it's me";
email = "oh no, not my email...";
phone = "you wanna stalk me? Go ahead.";

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
    driver.findElement(By.xpath("//input[@value='add to cart']")).click();

    await driver.wait(until.elementLocated(By.xpath("//*[contains(text(),'checkout now')]"))).click();

    await driver.wait(until.elementLocated(By.xpath("//*[@placeholder='name']"))).click();
    driver.findElement(By.xpath("//*[@placeholder='name']")).sendKeys(name);

    await driver.wait(until.elementLocated(By.xpath("//*[@placeholder='email']"))).click();
    driver.findElement(By.xpath("//*[@placeholder='email']")).sendKeys(email);

    await driver.wait(until.elementLocated(By.xpath("//*[@placeholder='tel']"))).click();
    driver.findElement(By.xpath("//*[@placeholder='tel']")).sendKeys(phone);
  } catch(err) {
    console.log(err);
    // await driver.quit();
  } finally {
    // await driver.quit();
  }

}

main();
