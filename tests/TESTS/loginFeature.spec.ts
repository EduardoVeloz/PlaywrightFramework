import { test, expect } from '@playwright/test';
import { LoginPage } from '../POM/loginPage';
import dotenv from 'dotenv'
dotenv.config()

test.describe('NTT Test Framework ', () => {
  let loginPage: LoginPage
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    await page.goto(process.env.BASE_URL as string)
    
  })

  test('User credentials', async () => {
    await loginPage.loginSuccess()
    await expect(loginPage.ProductsText).toBeVisible()
  })


})
