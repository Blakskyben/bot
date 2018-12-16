const {Builder, By, Key, until} = require('selenium-webdriver'),
  app = require('express'),
  express = app();

let driver = new Builder().forBrowser('chrome').build();

driver.get('https://supremenewyork.com');

driver.findElement(By.className('shop_link')).click();

//Bugged code starts below.
let all = driver.findElement(By.xpath("//a[@value='view all']"));

driver.promise.filter(all, (element)=>{
  return element.isDisplayed();
}).then((element)=>{
  element.click();
});
//End of bugged code.
