import { test, expect } from '@playwright/test';

test('Assignment: Radio Button Interactions', async ({ page }) => {
    await page.goto('https://leafground.com/radio.xhtml');

    const defaultRadio = page.locator('//table[@id="j_idt87:console2"]//div[contains(@class,"ui-state-active")]/../following-sibling::label');
    await expect(defaultRadio).toHaveText('Safari');

    const favBrowser = page.locator('label[for="j_idt87:console1:0"]');
    await favBrowser.click();
    await expect(favBrowser).toBeEnabled();

    await page.locator('label[for="j_idt87:city2:0"]').click();

    const defaultAgeGroup = page.locator('//div[@id="j_idt87:age"]//div[contains(@class,"ui-state-active")]/../following-sibling::label');
    await expect(defaultAgeGroup).toHaveText('1-20 Years');

    await page.locator('label[for="j_idt87:age:1"]').click();
});