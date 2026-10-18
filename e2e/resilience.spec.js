const { test, expect } = require('@playwright/test');
const { mockApis, waitForCatalog, catalog } = require('./helpers/mockApis');

test.describe('API failures and caching', () => {
  test('still renders library and book cards when GitHub API fails', async ({ page }) => {
    await mockApis(page, { githubStatus: 404 });
    await page.goto('/');
    await expect(page.getByTestId('gui-card')).toHaveCount(catalog.gui);
    await expect(page.getByTestId('book-card')).toHaveCount(catalog.books);
    await expect(page.getByTestId('library-card')).toHaveCount(catalog.libraryCards);
    await expect(page.getByTestId('card-error')).toHaveCount(0);
    await expect(page.getByTestId('star-count')).toHaveCount(0);
  });

  test('reuses cached library payloads after a reload', async ({ page }) => {
    await mockApis(page);
    await page.goto('/');
    await waitForCatalog(page);

    const cacheKeys = await page.evaluate(() => Object.keys(localStorage));
    expect(cacheKeys.some(key => key.startsWith('repo:'))).toBe(true);

    await page.unroute('**/api/github/**');
    await page.unroute('https://api.github.com/**');
    await page.route('**/api/github/**', route => route.abort());
    await page.route('https://api.github.com/**', route => route.abort());

    await page.reload();
    await expect(page.getByTestId('library-card')).toHaveCount(catalog.libraryCards);
    await expect(page.getByTestId('book-card')).toHaveCount(catalog.books);
    await expect(page.getByTestId('star-count').first()).toBeVisible();
  });
});
