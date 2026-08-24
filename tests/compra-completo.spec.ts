import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventarioPage } from '../pages/inventarioPage';
import { CartPage } from '../pages/cartPage';
import { CheckOutDataPage } from '../pages/checkOutDataPage';
import { FinishPage } from '../pages/finishPage';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const loginPage = new LoginPage(page);
  loginPage.fillUser("standard_user");
  loginPage.fillPassword("secret_sauce");
  loginPage.clickLoginButton();

  const inventarioPage = new InventarioPage(page);
  inventarioPage.addBackpackToCart();
  inventarioPage.addBikeLightToCart();
  inventarioPage.goToShoppingCart();

  const checkoutButton = new CartPage(page);
  checkoutButton.clickCheckoutButton();
  
  const checkoutDataPage = new CheckOutDataPage(page);
  checkoutDataPage.fillFirstName("luis");
  checkoutDataPage.fillLastName("santos");
  checkoutDataPage.fillPostalCode("0000");
  checkoutDataPage.clickContinueButton();

  const finishButton = new FinishPage(page);
  finishButton.clickFinishButton();

  /*await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();*/

 /* await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();*/

  /*await page.locator('[data-test="checkout"]').click();*/

  /*await page.locator('[data-test="firstName"]').fill('luis');
  await page.locator('[data-test="lastName"]').fill('santos');
  await page.locator('[data-test="postalCode"]').fill('0000');
  await page.locator('[data-test="continue"]').click();*/

  /*await page.locator('[data-test="finish"]').click();*/
});