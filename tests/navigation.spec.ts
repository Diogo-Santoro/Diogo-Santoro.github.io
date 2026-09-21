import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate between main pages via header links', async ({ page, isMobile }) => {
    await page.goto('/');

    if (isMobile) {
      await page.click('button[aria-label="Open menu"]');
      await page.click('nav[aria-label="Mobile navigation"] >> text=About');
    } else {
      await page.click('nav[aria-label="Main navigation"] >> text=About');
    }
    await expect(page).toHaveURL(/.*\/about/);
    await expect(page.locator('h1').first()).toContainText(/About/i);

    if (isMobile) {
      await page.click('button[aria-label="Open menu"]');
      await page.click('nav[aria-label="Mobile navigation"] >> text=Projects');
    } else {
      await page.click('nav[aria-label="Main navigation"] >> text=Projects');
    }
    await expect(page).toHaveURL(/.*\/projects/);
    await expect(page.locator('h1').first()).toContainText(/Things I've built/i);

    if (isMobile) {
      await page.click('button[aria-label="Open menu"]');
      await page.click('nav[aria-label="Mobile navigation"] >> text=Contact');
    } else {
      await page.click('nav[aria-label="Main navigation"] >> text=Contact');
    }
    await expect(page).toHaveURL(/.*\/contact/);
    await expect(page.locator('h1').first()).toContainText(/Let's build/i);
  });
});
