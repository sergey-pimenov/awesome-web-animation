const { test, expect, waitForCatalog, catalog } = require('./helpers/test');

test.describe('navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await waitForCatalog(page);
  });

  test('renders a labeled link for every category', async ({ page }) => {
    const links = page.getByTestId('navigation').locator('a');
    await expect(links).toHaveCount(catalog.navLabels.length);

    for (let index = 0; index < catalog.navLabels.length; index += 1) {
      const link = links.nth(index);
      await expect(link).toHaveText(catalog.navLabels[index]);
      await expect(link).toHaveAttribute('href', `#${catalog.categories[index]}`);
    }
  });

  test('jumps to the matching category when a nav item is clicked', async ({ page }) => {
    for (const name of catalog.categories) {
      await page.getByTestId('navigation').locator(`a[href="#${name}"]`).click();
      await expect(page).toHaveURL(new RegExp(`#${name}$`));
      await expect(page.locator(`#${name}`)).toBeVisible();
    }
  });
});
