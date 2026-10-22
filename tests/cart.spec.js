// tests/cart.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const users = require('../fixtures/users.json');

test.describe('Cart tests', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.validUser.username, users.validUser.password);
  });

  test('add item to cart', async ({ page }) => {
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);

    await inventory.addToCart('sauce-labs-backpack');
    await expect(page.locator(inventory.cartBadge)).toHaveText('1');

    await inventory.openCart();
    await expect(page.locator(cart.items)).toHaveCount(1);
    await expect(page.locator(cart.itemName)).toHaveText('Sauce Labs Backpack');
  });
});