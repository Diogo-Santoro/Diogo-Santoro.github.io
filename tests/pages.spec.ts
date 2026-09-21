import { test, expect } from '@playwright/test';

test.describe('Other Pages', () => {
  test('About page should render correctly', async ({ page }) => {
    await page.goto('/about');
    const heading = page.locator('h1').first();
    await expect(heading).toBeVisible();

    const paragraph = page.locator('main p').first();
    await expect(paragraph).toBeVisible();
  });

  test('Contact page should render correctly', async ({ page }) => {
    await page.goto('/contact');
    const heading = page.locator('h1').first();
    await expect(heading).toBeVisible();
    await expect(heading).toContainText(/Let's build/i);

    const mailLink = page.locator('a[href^="mailto:"]');
    if (await mailLink.count() > 0) {
      await expect(mailLink.first()).toBeVisible();
    }
  });
});
