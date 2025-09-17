import { test, expect } from '@playwright/test';

test.describe('Exercise 5 - Character Carousel', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.click('a[href="/exercice5"]');
  });


  test('should navigate to next character when Suivant button is clicked', async ({ page }) => {
    const nextButton = page.locator('button').filter({ hasText: 'Suivant' });
    const card = page.locator('.card .card-content');

    // Click next to go to Darth Vader (index 1)
    await nextButton.click();

    // Check character details for Darth Vader
    await expect(card).toContainText('SithLord');
    await expect(card).toContainText('100');

    // Check lightsaber color (red for Darth Vader)
    const blade = page.locator('.card svg rect.svg-blade');
    await expect(blade).toHaveAttribute('fill', 'red');
  });

  test('should navigate to previous character when Précédent button is clicked', async ({ page }) => {
    const prevButton = page.locator('button').filter({ hasText: 'Précédent' });
    const nextButton = page.locator('button').filter({ hasText: 'Suivant' });
    const card = page.locator('.card .card-content');

    // First go to next character (Darth Vader)
    await nextButton.click();
    await expect(card).toContainText('SithLord');

    // Then go back to previous character (Luke)
    await prevButton.click();
    await expect(card).toContainText('GrandMaster');

    // Check lightsaber color is back to blue
    const blade = page.locator('.card svg rect.svg-blade');
    await expect(blade).toHaveAttribute('fill', 'blue');
  });

});