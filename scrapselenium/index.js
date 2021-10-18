var webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

var driver = new webdriver.Builder().forBrowser("chrome").build();

(async () => {
  await driver.get("http://www.google.com");

  const searchInput = await driver.findElement(webdriver.By.name("q"));

  await searchInput.sendKeys("hello");

  const buttons = await driver.findElements(webdriver.By.name("btnK"));
  const searchButton = buttons[1];

  await searchButton.click();

  await driver.sleep(2000);

  driver.quit();
})();
