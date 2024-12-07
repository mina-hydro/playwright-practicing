import {test, expect} from "@playwright/test"

test("learned methods", async ({page}) => {
    await page.goto('https://www.google.com')
    await page.pause()
    await page.click('id=q') //or
    await page.locator("[id='q']").fill('lol')
    // or xpath=//input[id="q"]
    // or just write the xpath directly
    // or page.locator('text="lol"') 
    // or page.locator(':has-text('LOGIN')) 
    // or page.locator('input:has-text('LOGIN')) 
})