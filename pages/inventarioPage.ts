import { Locator, Page } from "@playwright/test";

export class InventarioPage {
    private readonly backpack: Locator;
    private readonly bikeLight: Locator;
    private readonly shoppingCart: Locator;

    constructor(page: Page) {
        this.backpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.bikeLight = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.shoppingCart = page.locator('[data-test="shopping-cart-link"]');
    }

    async addBackpackToCart() {
        await this.backpack.click();
    }

    async addBikeLightToCart() {
        await this.bikeLight.click();
    }

    async goToShoppingCart() {
        await this.shoppingCart.click();
    }
}