async function main() {
    const { Builder, By, Key, until } = require('selenium-webdriver');

    let driver = new Builder().forBrowser('chrome').build();

    driver.get('https://supremenewyork.com');

    driver.findElement(By.className('shop_link')).click();

    // await driver.wait(() => {
    //    return driver.findElement(By.xpath("//a[@value='view all']")).isDisplayed();
    // });

    let elements = await driver.findElements(By.xpath("//a[@value='view all']")),
        element,
        visible;

    for (element of elements) {
        visible = await element.isDisplayed();

        if (visible) {
            element.click();
        }
    }
}

main();
