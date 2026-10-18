const { test, expect, waitForCatalog, catalog } = require('./helpers/test');

test.describe('homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await waitForCatalog(page);
  });

  test('renders the document title, header, and landmarks', async ({ page }) => {
    await expect(page).toHaveTitle('Awesome web-animation');
    await expect(page.getByTestId('header')).toContainText('web animation');
    await expect(page.getByTestId('header')).toContainText('awesome list');
    await expect(page.getByRole('banner')).toBeVisible();
    await expect(page.getByRole('navigation', { name: 'Categories' })).toBeVisible();
    await expect(page.getByRole('main')).toBeVisible();
    await expect(page.getByRole('contentinfo')).toBeVisible();
  });

  test('shows every category section from the catalog', async ({ page }) => {
    const sections = page.getByTestId('category');
    await expect(sections).toHaveCount(catalog.categories.length);

    for (const name of catalog.categories) {
      await expect(page.locator(`#${name}`)).toHaveText(name);
      await expect(page.getByTestId('category').filter({ has: page.locator(`#${name}`) })).toBeVisible();
    }
  });

  test('links the GitHub corner and footer to the project author', async ({ page }) => {
    const corner = page.getByRole('link', { name: 'View source on GitHub' });
    await expect(corner).toHaveAttribute(
      'href',
      'https://github.com/sergey-pimenov/awesome-web-animation',
    );
    await expect(corner).toHaveAttribute('target', '_blank');
    await expect(corner).toHaveAttribute('rel', /noopener/);

    const footerLink = page.getByTestId('footer').locator('a');
    await expect(footerLink).toHaveAttribute('href', 'https://github.com/sergey-pimenov/');
    await expect(footerLink).toContainText('Sergey Pimenov');
    await expect(footerLink).toHaveAttribute('target', '_blank');
  });
});
