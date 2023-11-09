import { Page, Locator } from "@playwright/test";
import { fileURLToPath } from "url";

export class LoginPage {
    //readOnly type of Locator
    readonly page: Page
    readonly userName: Locator
    readonly pass: Locator
    readonly logo: Locator
    readonly loginButton: Locator
    readonly ProductsText: Locator


    constructor(page : Page) {
        //Locators
        this.page = page
        this.userName = page.locator('#user-name')
        this.pass = page.locator('#password')
        this.logo = page.getByText('Password for all users:')
        this.loginButton = page.locator('#login-button')
        this.ProductsText = page.getByText('Products')
        
    }

    async loginSuccess() {
        await this.userName.fill(process.env.LOGINUSERNAME as string)
        await this.pass.fill(process.env.LOGINPASSWORD as string)
        await this.loginButton.click()

    }
}