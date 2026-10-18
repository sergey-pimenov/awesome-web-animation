const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  timeout: 60000,
  expect: {
    timeout: 15000,
  },
  reporter: [['list']],
  use: {
    baseURL: 'http://localhost:1234',
    trace: 'on-first-retry',
    viewport: { width: 1440, height: 900 },
  },
  webServer: {
    command: 'npm start',
    url: 'http://localhost:1234',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
