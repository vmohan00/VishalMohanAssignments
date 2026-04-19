import { chromium, test, expect } from "@playwright/test"; // 

test("Salesforce Login with Multiple CSS Selectors", async () => {
    // Step 1: Launch the browser (Chromium) 
    // The await keyword handles the 'Pending' stage of the promise 
    const browser = await chromium.launch({ headless: false }); 

    // Step 2: Create a new isolated browser context 
    const context = await browser.newContext(); 

    // Step 3: Create a new page 
    const page = await context.newPage(); 

    // 1. Navigate to the Salesforce login page
    await page.goto("https://login.salesforce.com/");

    // 2. Use different CSS selector strategies [cite: 1, 8]
    
    // ID Strategy: #username
    const usernameField = page.locator("#username");
    
    // Attribute Strategy: [name='pw'] or [id='password']
    const passwordField = page.locator("input[name='pw']");
    
    // Class Strategy: .button.r4.wide.primary
    const loginButton = page.locator(".button.r4.wide.primary");

    // 3. Enter sample credentials using Template Literals for clarity 
    const user = "test_user@example.com";
    const pass = "Password123!";
    
    await usernameField.fill(`${user}`); 
    await passwordField.fill(`${pass}`);

    // 4. Click the login button using a CSS selector
    // This transitions the promise from 'Pending' to 'Resolve' upon completion 
    await loginButton.click();

    // 5. Verify successful login 
    // We check if the URL contains "home" or "lightning" after redirection
    await expect(page).toHaveURL(/.*salesforce.com/);
    
    // Cleanup
    await page.waitForTimeout(3000);
    await browser.close();
});