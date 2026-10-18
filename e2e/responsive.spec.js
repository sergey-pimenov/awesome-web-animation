const { test, expect, waitForCatalog, catalog } = require('./helpers/test');

test.describe('responsive layout', () => {
  test('keeps navigation and categories usable on a phone', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await waitForCatalog(page);

    const navigation = page.getByTestId('navigation');
    await expect(navigation).toBeVisible();
    await expect(navigation.locator('a')).toHaveCount(catalog.navLabels.length);
    await expect(page.getByTestId('github-corner')).toBeHidden();
    await expect(page.getByTestId('category')).toHaveCount(catalog.categories.length);
    await expect(page.getByTestId('library-card').first()).toBeVisible();
    await expect(page.getByTestId('book-card').first()).toBeVisible();
    await expect(page.getByTestId('gui-card').first()).toBeVisible();
  });
});
