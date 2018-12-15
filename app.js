const {Builder, By, Key, until} = require('selenium-webdriver'),
  app = require('express'),
  express = app();

let driver = new Builder().forBrowser('chrome').build();

driver.get('https://supremenewyork.com');
