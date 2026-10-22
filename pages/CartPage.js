// pages/CartPage.js
class CartPage {
  constructor(page) {
    this.page = page;
    this.items = '.cart_item';
    this.itemName = '.inventory_item_name';
    this.checkoutButton = '[data-test="checkout"]';
  }

  async checkout() {
    await this.page.click(this.checkoutButton);
  }
}

module.exports = { CartPage };