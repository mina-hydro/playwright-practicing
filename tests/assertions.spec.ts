import {test, expect} from "@playwright/test"

test('assertions learning', async({page}) => {
    await page.goto('https://kitchen.applitools.com/')
    await expect.soft(page.locator('h1')).toHaveCount(1) // notice soft()

    if(await page.$('text=Kitchen')) {          // Notice the element handler ($)
        await page.click('text=Kitchen')
    }

    await expect(page.locator('whatever it is')).toHaveAttribute('class', /.*css/)

    await expect(page).toHaveURL(/google.com/)      // Notice using regular expression

    await expect(page).toHaveTitle(/.*google/)      // Notice using regular expression

    await expect(page).toHaveScreenshot()
})