const { test, expect, waitForCatalog, catalog } = require('./helpers/test');

test.describe('GUI tools', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await waitForCatalog(page);
  });

  test('renders every GUI tool with its name, description, cover, and outbound link', async ({ page }) => {
    const cards = page.getByTestId('gui-card');
    await expect(cards).toHaveCount(catalog.gui);

    for (const name of catalog.guiNames) {
      const card = cards.filter({ hasText: name });
      await expect(card).toHaveCount(1);
      await expect(card.locator('img')).toHaveAttribute('alt', `Cover of ${name}`);
      await expect(card.locator('a').first()).toHaveAttribute('target', '_blank');
      await expect(card.locator('a').first()).toHaveAttribute('href', /.+/);
    }
  });
});
