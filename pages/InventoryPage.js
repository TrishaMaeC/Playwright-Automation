// pages/InventoryPage.js
class InventoryPage {
  constructor(page) {
    this.page = page;
    this.cartLink = '.shopping_cart_link';
    this.cartBadge = '.shopping_cart_badge';
  }

  async addToCart(productSlug) {
    await this.page.click(`[data-test="add-to-cart-${productSlug}"]`);
  }

  async openCart() {
    await this.page.click(this.cartLink);
  }
}

module.exports = { InventoryPage };