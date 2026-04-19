import { test, expect } from '@playwright/test';

test('Assignment: Dropdown interactions and verification', async ({ page }) => {
    
    await page.goto('https://leafground.com/select.xhtml');

    const uiToolDropdown = page.locator('select.ui-selectonemenu');
    await uiToolDropdown.selectOption({ label: 'Playwright' });

    const options = page.locator('select.ui-selectonemenu option');
    const count = await options.count();
    const allValues = await options.allTextContents();
    console.log(`Total options: ${count}`);
    console.log('Values:', allValues);

    await page.locator('label:has-text("Select Country")').click();
    await page.locator('li[data-label="USA"]').click();

    const cityDropdown = page.locator('label:has-text("Select City")');
    await expect(cityDropdown).not.toHaveText('Select City');
    
    await cityDropdown.click();
    const cityOptions = page.locator('#j_idt87:city_panel li');
    const cityCount = await cityOptions.count();
    console.log(`Cities loaded for USA: ${cityCount}`);
    await page.locator('li[data-label="New York"]').click();

    const courseTrigger = page.locator('button[aria-label="Show Options"]');
    await courseTrigger.click();
    await page.locator('li[data-item-value="Selenium"]').click();
    await page.locator('li[data-item-value="Playwright"]').click();
    await page.locator('li[data-item-value="Appium"]').click();

    await page.locator('label:has-text("Select Language")').click();
    await page.locator('li[data-label="English"]').click();

    const languagePanel = page.locator('#j_idt87:language_panel li');
    console.log('Language options:', await languagePanel.allTextContents());

    await page.locator('label:has-text("Select Values")').click();
    await page.locator('li[data-label="Two"]').click();
});