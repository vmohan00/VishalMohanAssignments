import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator('#username').fill('Demosalesmanager');
    await page.locator('#password').fill('crmsfa');
    await page.click('.decorativeSubmit');
    await page.click('text=CRM/SFA');
});

test('Assignment 1: Create a Lead and Verify Title', async ({ page }) => {
    await page.click('text=Leads');
    await page.click('text=Create Lead');

    await page.locator('#createLeadForm_companyName').fill('Tech Solutions Inc');
    await page.locator('#createLeadForm_firstName').fill('Alex');
    await page.locator('#createLeadForm_lastName').fill('Smith');
    await page.locator('#createLeadForm_personalTitle').fill('Mr.');
    await page.locator('#createLeadForm_generalProfTitle').fill('QA Automation Lead');
    await page.locator('#createLeadForm_annualRevenue').fill('100000');
    await page.locator('#createLeadForm_departmentName').fill('Quality Assurance');
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('1234567890');

    await page.click('input[name="submitButton"]');

    const pageTitle = await page.title();
    console.log(pageTitle);

    await expect(page).toHaveTitle(/View Lead/);
});