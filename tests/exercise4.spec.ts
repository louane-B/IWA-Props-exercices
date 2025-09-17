import { test, expect } from '@playwright/test';

test.describe('Exercise 4 - Character Object with Sith Status', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.click('a[href="/exercice4"]');
  });

  test('should display Luke Skywalker character information', async ({ page }) => {
    const card = page.locator('.card .card-content');

    await expect(card.locator('.info-title').filter({ hasText: 'Rank:' })).toBeVisible();
    await expect(card).toContainText('GrandMaster');

    await expect(card.locator('.info-title').filter({ hasText: 'Force Level:' })).toBeVisible();
    await expect(card).toContainText('100');
  });

  test('should display blue lightsaber for Luke Skywalker', async ({ page }) => {
    const lightsaber = page.locator('.card svg rect.svg-blade');

    await expect(lightsaber).toBeVisible();
    await expect(lightsaber).toHaveAttribute('fill', 'blue');
  });

  test('should display "Ce n\'est pas un sith" for Luke (isSith=false)', async ({ page }) => {
    const modal = page.locator('.modal .modal-content');

    await expect(modal).toContainText('Ce n\'est pas un sith');
    await expect(modal).not.toContainText('c\'est un sith');
  });

});