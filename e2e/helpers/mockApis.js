const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '../..');
const itemsYaml = fs.readFileSync(path.join(root, 'data/items.yaml'), 'utf8');
const booksYaml = fs.readFileSync(path.join(root, 'data/books.yaml'), 'utf8');
const guiYaml = fs.readFileSync(path.join(root, 'data/gui.yaml'), 'utf8');

const bundleFileNames = [...itemsYaml.matchAll(/fileName:\s*(.+)/g)].map(match => match[1].trim());
const guiNames = [...guiYaml.matchAll(/^\s+- name:\s*(.+)$/gm)].map(match => match[1].trim());

const catalog = {
  libraryCards: (itemsYaml.match(/^\s+- repo:/gm) || []).length,
  books: (booksYaml.match(/googleBookId:/g) || []).length,
  gui: guiNames.length,
  categories: ['Books', 'SVG', 'Common', 'CSS', 'Canvas', 'Scroll', 'Text', 'React', 'GUI'],
  navLabels: ['Books', 'SVG', 'Common', 'CSS', 'Canvas', 'Scroll', 'Text', 'React', 'With GUI'],
  guiNames,
  bundleFileNames,
};

function githubRepoPayload(repoFullName) {
  const [owner, name] = repoFullName.split('/');
  return {
    html_url: `https://github.com/${repoFullName}`,
    name,
    description: `${name} is a mocked web animation library.`,
    stargazers_count: 4200,
    open_issues_count: 3,
    pushed_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    created_at: '2016-01-01T00:00:00Z',
    language: 'JavaScript',
    license: { name: 'MIT' },
    owner: {
      avatar_url: 'https://example.com/avatar.png',
      login: owner,
      url: `https://api.github.com/users/${owner}`,
    },
  };
}

async function mockApis(page, options = {}) {
  const githubStatus = options.githubStatus || 200;

  const githubHandler = async route => {
    if (githubStatus !== 200) {
      await route.fulfill({
        status: githubStatus,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Not Found' }),
      });
      return;
    }

    const url = route.request().url();

    if (url.includes('/contents/')) {
      await route.fulfill({
        json: catalog.bundleFileNames.map(name => ({ name, size: 15360 })),
      });
      return;
    }

    if (url.includes('/users/')) {
      await route.fulfill({
        json: { name: 'Mock Author' },
      });
      return;
    }

    const match = url.match(/repos\/([^/]+\/[^/?#]+)/);
    const repo = match ? decodeURIComponent(match[1]) : 'owner/repo';
    await route.fulfill({ json: githubRepoPayload(repo) });
  };

  const jsdelivrHandler = async route => {
    const url = route.request().url();
    if (url.includes('@')) {
      await route.fulfill({
        json: {
          files: [
            ...catalog.bundleFileNames.map(name => ({ name, size: 8192 })),
            {
              name: 'dist',
              files: catalog.bundleFileNames.map(name => ({ name, size: 8192 })),
            },
            {
              name: 'bundled',
              files: catalog.bundleFileNames.map(name => ({ name, size: 8192 })),
            },
          ],
        },
      });
      return;
    }

    await route.fulfill({ json: { tags: { latest: '1.2.3' } } });
  };

  await page.route('**/api/github/**', githubHandler);
  await page.route('https://api.github.com/**', githubHandler);
  await page.route('**/api/jsdelivr/**', jsdelivrHandler);
  await page.route('https://data.jsdelivr.com/**', jsdelivrHandler);
}

async function waitForCatalog(page) {
  const { expect } = require('@playwright/test');
  await page.getByTestId('app').waitFor();
  await expect(page.getByTestId('library-card').first()).toBeVisible({ timeout: 30000 });
  await expect(page.getByTestId('book-card').first()).toBeVisible();
  await expect(page.getByTestId('gui-card').first()).toBeVisible();
  await expect(page.getByTestId('card-skeleton')).toHaveCount(0);
}

module.exports = {
  catalog,
  mockApis,
  waitForCatalog,
  githubRepoPayload,
};
