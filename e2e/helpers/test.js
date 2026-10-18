const { test: base, expect } = require('@playwright/test');
const { mockApis, waitForCatalog, catalog } = require('./mockApis');

const test = base.extend({
  page: async ({ page }, use) => {
    await mockApis(page);
    await use(page);
  },
});

module.exports = { test, expect, waitForCatalog, catalog, mockApis };
