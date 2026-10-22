// pages/CheckoutPage.js
class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstName = '[data-test="firstName"]';
    this.lastName = '[data-test="lastName"]';
    this.postalCode = '[data-test="postalCode"]';
    this.continueButton = '[data-test="continue"]';
    this.finishButton = '[data-test="finish"]';
    this.completeHeader = '.complete-header';
  }

  async fillInfo(first, last, zip) {
    await this.page.fill(this.firstName, first);
    await this.page.fill(this.lastName, last);
    await this.page.fill(this.postalCode, zip);
    await this.page.click(this.continueButton);
  }

  async finish() {
    await this.page.click(this.finishButton);
  }
}

module.exports = { CheckoutPage };