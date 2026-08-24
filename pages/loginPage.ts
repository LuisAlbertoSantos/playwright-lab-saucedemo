import { Locator, Page } from "@playwright/test";

export class LoginPage {

    private readonly userTexBox: Locator;
    private readonly passwordTexBox: Locator;
    private readonly loginButton: Locator;

    constructor(page: Page) { 
        this.userTexBox = page.locator('[data-test="username"]');
        this.passwordTexBox = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
    }

    async fillUser(username: string){
        await this.userTexBox.fill(username);
    }

    async fillPassword(password: string){
        await this.passwordTexBox.fill(password);
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }
}