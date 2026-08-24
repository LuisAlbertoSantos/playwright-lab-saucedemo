import { Locator, Page } from "@playwright/test";

export class FinishPage {
    private readonly finishButton: Locator;

    constructor(page: Page) {
        this.finishButton = page.locator('[data-test="finish"]');
    }

    async clickFinishButton() {
        await this.finishButton.click();
    }
}