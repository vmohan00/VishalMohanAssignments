import { test, expect } from '@playwright/test';

test('Assignment: Checkbox and Toggle Interactions', async ({ page }) => {
    
    await page.goto('https://leafground.com/checkbox.xhtml');

    await page.locator('div.ui-chkbox-box').first().click();

    await page.locator('//span[text()="Ajax"]/preceding-sibling::div').click();
    const notificationMsg = page.locator('.ui-growl-message');
    await expect(notificationMsg).toBeVisible();
    await expect(notificationMsg).toContainText('Checked');

    await page.locator('label[for="j_idt87:basic:0"]').click();

    const triState = page.locator('#j_idt87\\:ajaxTriState');
    await triState.click();
    const triStateMsg = page.locator('.ui-growl-message');
    await expect(triStateMsg).toBeVisible();
    await expect(triStateMsg).toContainText('State has been changed');

    await page.locator('.ui-toggleswitch-slider').click();
    await expect(page.locator('.ui-growl-message')).toContainText('Checked');

    const disabledCheckbox = page.locator('#j_idt87\\:j_idt102_input');
    await expect(disabledCheckbox).toBeDisabled();

    await page.locator('.ui-selectcheckboxmenu-trigger').click();
    await page.locator('li.ui-selectcheckboxmenu-item label:has-text("London")').click();
    await page.locator('li.ui-selectcheckboxmenu-item label:has-text("Paris")').click();
    await page.locator('li.ui-selectcheckboxmenu-item label:has-text("Rome")').click();
    await page.locator('.ui-selectcheckboxmenu-close').click();

    const multipleSelectionText = page.locator('.ui-selectcheckboxmenu-multiple-container');
    await expect(multipleSelectionText).toContainText('London');
    await expect(multipleSelectionText).toContainText('Paris');
    await expect(multipleSelectionText).toContainText('Rome');
});