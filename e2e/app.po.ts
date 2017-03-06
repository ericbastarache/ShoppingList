import { browser, element, by } from 'protractor';

export class ShoppingListPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('slist-root h1')).getText();
  }
}
