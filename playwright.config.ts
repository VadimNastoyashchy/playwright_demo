import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    reporter: [
        ['list'],
        ['@packageio/playwright-github-actions-reporter'],
    ],
    use: {
        trace: 'on-first-retry',
        baseURL: 'http://automationpractice.com/'
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        }
    ],
};
export default config;