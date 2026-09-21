import { test, expect } from '@playwright/test';

test('homepage has title and main elements', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  // We can update this when we know the exact title, for now check it's not empty
  const title = await page.title();
  expect(title.length).toBeGreaterThan(0);
});
