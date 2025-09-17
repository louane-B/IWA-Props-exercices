import { test, expect } from '@playwright/test';

test.describe('Exercise 2.5 - Messages Modal', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.click('a[href="/exercice2point5"]');
  });

  test('should show alert when message is too long (>100 characters)', async ({ page }) => {
    const input = page.locator('input[type="text"]');
    const longMessage = 'a'.repeat(101); // 101 characters

    page.on('dialog', async dialog => {
      expect(dialog.message()).toBe('Trop long');
      await dialog.accept();
    });

    await input.fill(longMessage);
    await input.press('Enter');

    // Message should not be added to modal
    const modal = page.locator('.modal .modal-content');
    await expect(modal.locator('p').filter({ hasText: longMessage })).not.toBeVisible();
  });

  test('should show alert when trying to add more than 5 messages', async ({ page }) => {
    const input = page.locator('input[type="text"]');

    // Add 5 messages first
    for (let i = 1; i <= 5; i++) {
      await input.fill(`Message ${i}`);
      await input.press('Enter');
    }

    // Try to add 6th message
    page.on('dialog', async dialog => {
      expect(dialog.message()).toBe('Trop de messages dans la liste');
      await dialog.accept();
    });

    await input.fill('Sixth message');
    await input.press('Enter');

    // 6th message should not be added
    const modal = page.locator('.modal .modal-content');
    await expect(modal.locator('p').filter({ hasText: 'Sixth message' })).not.toBeVisible();
  });

  test('should accept exactly 5 messages', async ({ page }) => {
    const input = page.locator('input[type="text"]');
    const modal = page.locator('.modal .modal-content');

    // Add exactly 5 messages
    for (let i = 1; i <= 5; i++) {
      await input.fill(`Message ${i}`);
      await input.press('Enter');
    }

    // All 5 messages should be visible
    for (let i = 1; i <= 5; i++) {
      await expect(modal.locator('p').filter({ hasText: `Message ${i}` })).toBeVisible();
    }
  });
});