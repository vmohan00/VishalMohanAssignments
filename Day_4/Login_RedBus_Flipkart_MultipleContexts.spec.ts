import { chromium, test } from "@playwright/test";



test("Verify Red Bus on Edge", async () => {

    const browser = await chromium.launch({ channel: "msedge", headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.redbus.in');

    
    const title = await page.title(); 
    const url = page.url(); 

    
    console.log(`Edge Instance - Title: ${title}`);
    console.log(`Edge Instance - URL: ${url}`);

    await page.waitForTimeout(3000);
    await browser.close(); 
});


test("Verify Flipkart on Chrome", async () => {
    
    const browser = await chromium.launch({ channel: "chrome", headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.flipkart.com');

    const title = await page.title();
    const url = page.url();

    console.log(`Chrome Instance - Title: ${title}`);
    console.log(`Chrome Instance - URL: ${url}`);

    await page.waitForTimeout(3000);
    await browser.close();
});