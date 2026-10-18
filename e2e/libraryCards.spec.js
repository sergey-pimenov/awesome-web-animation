const { test, expect, waitForCatalog, catalog } = require('./helpers/test');

test.describe('library cards', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await waitForCatalog(page);
  });

  test('renders a card for every library in the data file', async ({ page }) => {
    await expect(page.getByTestId('library-card')).toHaveCount(catalog.libraryCards);
    await expect(page.getByTestId('card-error')).toHaveCount(0);
    await expect(page.getByTestId('card-skeleton')).toHaveCount(0);
  });

  test('shows GitHub metadata, bundle size, and a safe external repo link', async ({ page }) => {
    const card = page.getByTestId('library-card').first();
    await expect(card.locator('h3')).not.toHaveText('');
    await expect(card).toContainText('mocked web animation library');
    await expect(card.getByTestId('star-count')).toHaveText(/4200/);
    await expect(card.getByTestId('issue-count')).toHaveText('3 issues');
    await expect(card.getByTestId('updated-at')).toHaveText(/Updated 5 days ago/);
    await expect(page.getByTestId('bundle-size').first()).toHaveText(/kb/);

    const link = card.locator('a').first();
    await expect(link).toHaveAttribute('href', /https:\/\/github\.com\//);
    await expect(link).toHaveAttribute('target', '_blank');
    await expect(link).toHaveAttribute('rel', /noopener/);
  });
});
