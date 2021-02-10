import { browser, by, element } from 'protractor';

/**
 * All documentation required
 */
export class AppPage {

  /**
   * All documentation required
   */
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  /**
   * All documentation required
   */
  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
