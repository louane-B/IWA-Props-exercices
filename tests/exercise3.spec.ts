import { test, expect } from '@playwright/test';

test.describe('Exercise 3 - Laser Shooting Game', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.click('a[href="/exercice3"]');
  });


  test('should add laser hole when SHOOT button is clicked', async ({ page }) => {
    const shootButton = page.locator('button');
    const modal = page.locator('.modal .jedi');

    // Initially no laser holes
    await expect(modal.locator('img.shot')).toHaveCount(0);

    // Click shoot button
    await shootButton.click();

    // Should have one laser hole
    await expect(modal.locator('img.shot')).toHaveCount(1);

    // Verify laser hole image
    const laserHole = modal.locator('img.shot').first();
    await expect(laserHole).toHaveAttribute('src', expect.stringContaining('LaserHole.svg'));
  });

  test('should add multiple laser holes when shooting multiple times', async ({ page }) => {
    const shootButton = page.locator('button');
    const modal = page.locator('.modal .jedi');

    // Click shoot button multiple times
    const numberOfShots = 5;
    for (let i = 0; i < numberOfShots; i++) {
      await shootButton.click();
    }

    // Should have multiple laser holes
    await expect(modal.locator('img.shot')).toHaveCount(numberOfShots);
  });

});