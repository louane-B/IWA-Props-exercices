import { test, expect } from '@playwright/test';

test.describe('Exercise 1 - Jedi Modal', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.click('a[href="/exercice1"]');
  });

  test('should toggle message when checkbox is clicked multiple times', async ({ page }) => {
    const checkbox = page.locator('input[type="checkbox"][name="jedi"]');
    const modal = page.locator('.modal .modal-content h3');

    // Start unchecked
    await checkbox.uncheck();
    await expect(modal).toHaveText('Sorry, you are not a Jedi');

    // Check it
    await checkbox.check();
    await expect(modal).toHaveText('May the force be with you');

    // Uncheck it again
    await checkbox.uncheck();
    await expect(modal).toHaveText('Sorry, you are not a Jedi');
  });
});