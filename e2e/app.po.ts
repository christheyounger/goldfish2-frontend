import { browser, by, element } from 'protractor';

export class Goldfish2webPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
