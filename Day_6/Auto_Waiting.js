import { test, expect } from '@playwright/test';

test('Assignment: Implementing Wait Strategies', async ({ page }) => {

    await page.goto('https://leafground.com/waits.xhtml');

    
    const visibilityBtn = page.locator('button:has-text("Click")').first();
    await visibilityBtn.click();
    const targetVisible = page.locator('button:has-text("I am here")');
    await expect(targetVisible).toBeVisible({ timeout: 10000 });

   
    const invisibilityBtn = page.locator('button:has-text("Click")').nth(1);
    await invisibilityBtn.click();
    const targetHidden = page.locator('button:has-text("I am about to hide")');
    await expect(targetHidden).toBeHidden({ timeout: 10000 });

   
    const clickabilityBtn = page.locator('button:has-text("Click")').nth(2);
    await clickabilityBtn.click();
    const targetClickable = page.locator('button:has-text("Wait for Clickability")');
    
    await targetClickable.click();
    await expect(targetClickable).toBeEnabled();

    
    const textChangeBtn = page.locator('button:has-text("Click")').nth(3);
    const changingTextElement = page.locator('.card').filter({ hasText: 'Wait for Text Change' }).locator('button span').last();
    
    
    await expect(changingTextElement).toHaveText('I am going to change');
    await textChangeBtn.click();
    
   
    await expect(changingTextElement).toHaveText('Did you notice?', { timeout: 10000 });

    
    console.log('Final Text after change:', await changingTextElement.textContent());
    await expect(page).toHaveURL(/waits/);
});