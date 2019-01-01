const { Builder, By, Key, until } = require('selenium-webdriver'),
  express = require("express"),
  app = express(),
  bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("./public"));
app.use(express.static("./public/css"));

// let category = null,
//   item = null
//   color = null
//   size = null
//   name = null,
//   email = null,
//   phone = null,
//   address = null,
//   zip = null,
//   cardNum = null,
//   cardExpMn = null,
//   cardExpYr = null,
//   cvv = null;

// category = "tops";
// category = category.toLowerCase();
// item = "Down Leather";
// color = "Black";
// size = "XL";
// name = "Ben Levy";
// email = "general@simplexwebsites.com";
// phone = "9142009372";
// address = "10 Windmill Pl";
// apt = "";
// zip = "10504";
// cardNum= "1234678890";
// cardExpMn = 1;
// cardExpYr = 2019;
// cvv = 123;

app.get("/",(req, res)=>{
  res.render("index.ejs");
});

app.get("/supreme",(req,res)=>{
  res.render("supreme.ejs");
});

app.get("/nike",(req,res)=>{
  res.render("nike.ejs");
});

app.post("/supreme", (req,res)=>{
  supremeFunc(req.body.category, req.body.color, req.body.size, req.body.name, req.body.email, req.body.phone, req.body.address, req.body.zip, req.body.cardNum, req.body.cardExpMn, req.body.cardExpYr, req.body.cvv);
});

app.post("/nike", (req,res)=>{

});

//functions below
async function supremeFunc(category, color, size, name, email, phone, address, zip, cardNum, cardExpMn, cardExpYr, cvv) {
  try{
    let driver = new Builder().forBrowser('chrome').build();

    driver.get('https://supremenewyork.com');

    driver.findElement(By.className('shop_link')).click();
    //begin get to shop/cat
    let element0 = await driver.wait(until.elementLocated(By.xpath("//*[contains(@href,'http://www.supremenewyork.com/shop/all')]", 10000)));
    await element0.click();
    let element1 = await driver.wait(until.elementLocated(By.xpath("//*[contains(text(),'"+category+"')]", 100)));
    await element1.click();

    while(await driver.wait(until.elementLocated(By.xpath("/*[contains(text(),'"+item+"')]")))==null){
      driver.navigate().refresh();
    }

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

    const el = await driver.wait(until.elementLocated(By.xpath("//*[contains(text(),'checkout')]")),10);
    el.click();

    await driver.wait(until.elementLocated(By.xpath("//*[@placeholder='name']"))).click();
    driver.findElement(By.xpath("//*[@placeholder='name']")).sendKeys(name);

    await driver.wait(until.elementLocated(By.xpath("//*[@placeholder='email']"))).click();
    driver.findElement(By.xpath("//*[@placeholder='email']")).sendKeys(email);

    await driver.wait(until.elementLocated(By.xpath("//*[@placeholder='tel']"))).click();
    driver.findElement(By.xpath("//*[@placeholder='tel']")).sendKeys(phone);

    await driver.wait(until.elementLocated(By.xpath("//*[@placeholder='address']"))).click();
    driver.findElement(By.xpath("//*[@placeholder='address']")).sendKeys(address);

    await driver.wait(until.elementLocated(By.xpath("//*[@placeholder='zip']"))).click();
    driver.findElement(By.xpath("//*[@id='order_billing_zip']")).sendKeys(zip);

    await driver.wait(until.elementLocated(By.xpath("//*[@id='nnaerb']"))).click();
    driver.findElement(By.xpath("//*[@id='nnaerb']")).sendKeys(cardNum);

    await driver.wait(until.elementLocated(By.xpath("//*[@id='credit_card_month']"))).click();
    driver.findElement(By.xpath("//*[@id='credit_card_month']/option[@value="+cardExpMn+"]")).click();

    await driver.wait(until.elementLocated(By.xpath("//*[@id='credit_card_year']"))).click();
    driver.findElement(By.xpath("//*[@id='credit_card_year']/option[@value="+cardExpYr+"]")).click();

    await driver.wait(until.elementLocated(By.xpath("//*[@placeholder='CVV']"))).click();
    driver.findElement(By.xpath("//*[@placeholder='CVV']")).sendKeys(cvv);

    await driver.wait(until.elementLocated(By.xpath("//*[@id='cart-cc']/fieldset/p[2]/label/div/ins"))).click();
    await driver.wait(until.elementLocated(By.xpath("//*[@id='pay']/input"))).click();

  } catch(err) {
    console.log(err);
    driver.close();
    await driver.quit();
  }
}

app.listen("3000");
