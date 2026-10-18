const { test, expect, waitForCatalog, catalog } = require('./helpers/test');

test.describe('books', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await waitForCatalog(page);
  });

  test('renders every book with title, authors, and preview link', async ({ page }) => {
    const cards = page.getByTestId('book-card');
    await expect(cards).toHaveCount(catalog.books);

    const card = cards.filter({ has: page.getByRole('heading', { name: 'SVG Animations', exact: true }) });
    await expect(card.locator('h3')).toHaveText('SVG Animations');
    await expect(card).toContainText('Sarah Drasner');
    await expect(card).toContainText('2017-03-17');
    await expect(card).toContainText('246');
    await expect(card.locator('a').first()).toHaveAttribute('href', /books\.google\.com/);
    await expect(card.locator('a').first()).toHaveAttribute('target', '_blank');
  });
});
