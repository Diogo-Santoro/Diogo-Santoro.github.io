import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should render hero section, featured projects, and CTA', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Diogo Santoro/);

    const heroHeading = page.locator('h1').first();
    await expect(heroHeading).toBeVisible();
    await expect(heroHeading).toContainText(/Diogo/i);

    const featuredSection = page.locator('section').filter({ hasText: 'Featured Work' });
    await expect(featuredSection).toBeVisible();

    const projectLinks = featuredSection.locator('a');
    expect(await projectLinks.count()).toBeGreaterThan(0);
    const ctaSection = page.locator('section').filter({ hasText: /Want to see everything/i });
    await expect(ctaSection).toBeVisible();
    
    const ctaLink = ctaSection.locator('a', { hasText: /View All Projects/i });
    if (await ctaLink.isVisible()) {
        await ctaLink.click();
        await expect(page).toHaveURL(/.*\/projects/);
    }
  });
});
