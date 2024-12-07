const {test, expect} = require('@playwright/test')

test.only("Login test", async ({page}) => {       // notice .only()
  await page.goto('https://demo.applitools.com/')
  await page.pause()
  await page.getByPlaceholder('Enter your username').fill('UU')
  await page.getByPlaceholder('Enter your password').fill('password')
  await page.waitForSelector('text=Sign in', {timeout: 4000})
  await page.getByRole('link', { name: 'Sign in' }).click()

})