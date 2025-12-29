// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration
 * https://playwright.dev/docs/test-configuration
 */
export default defineConfig({

  /* ==============================
   * Global timeouts
   * ============================== */
  timeout: 120_000,

  /* ==============================
   * Test structure
   * ============================== */
  testDir: './tests',
  fullyParallel: true,

  /* ==============================
   * CI behavior
   * ============================== */
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  /* ==============================
   * Reports
   * ============================== */
  reporter: 'html',

  /* ==============================
   * Shared context configuration
   * ============================== */
  use: {
    headless: false,          // 👀 visible browser (ideal para debug)
    slowMo: 600,              // 🐢 ralentiza cada acción
    viewport: { width: 1280, height: 720 },

    actionTimeout: 30_000,
    navigationTimeout: 45_000,

    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  /* ==============================
   * Browser projects
   * ============================== */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // 🔽 Habilitar cuando lo necesites
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    // 📱 Mobile
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },
  ],
});
