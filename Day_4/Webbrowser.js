//browser
//browser context --> window (individual isolated profile + incoginto mode/doesnt store any data)
// page

import { chromium, firefox, test, webkit } from "@playwright/test"; // test function is imported from playwright library

test(Test to launch a browser, async () =>  {

    const browser = await chromium.launch() // Step1 launching the browser
    const context = await browser.newContext() // Step2 creating a new context
    const page    =await context.newPage() // Step3 new page created 

    await page.goto('https://www.amazon.in/');

    // page.url();

    // await page.title()

    await page.waitForTimeout(3000)




    /* await returns promise has three stages 
    1. pending\
    2. resolve --> it has completed the action to be performed
    3. rejected  */
                 
    
    
 })