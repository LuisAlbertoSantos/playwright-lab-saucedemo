import { Locator, Page } from "@playwright/test";

export class CartPage {
    private readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.checkoutButton = page.locator('[data-test="checkout"]');
    }

    async clickCheckoutButton() {
        await this.checkoutButton.click();
    }
}