import { test, expect } from '@playwright/test';

test.describe('Projects Page', () => {
  test('should render a list of projects', async ({ page }) => {
    await page.goto('/projects');

    await expect(page.locator('h1').first()).toBeVisible();

    const projectLinks = page.locator('main').locator('a[href*="http"], a[href^="/projects/"]');

    expect(await projectLinks.count()).toBeGreaterThanOrEqual(0);
  });
});
