import { Locator, Page } from "@playwright/test";

export class CheckOutDataPage {
    private readonly firstName: Locator;
    private readonly lastName: Locator;
    private readonly postalCode: Locator;
    private readonly continueButton: Locator;

    constructor(page: Page) {
        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.postalCode = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
    }

    async fillFirstName(firstName: string) {
        await this.firstName.fill(firstName);
    }

    async fillLastName(lastName: string) {
        await this.lastName.fill(lastName);
    }

    async fillPostalCode(postalCode: string) {
        await this.postalCode.fill(postalCode);
    }

    async clickContinueButton() {
        await this.continueButton.click();
    }   
}