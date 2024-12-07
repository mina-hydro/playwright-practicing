import {test, expect} from "@playwright/test"

test('assertions learning', async({page}) => {
    await page.goto('https://kitchen.applitools.com/')

    await expect(page).toHaveScreenshot()
})