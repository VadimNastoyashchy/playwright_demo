import {expect, test} from '@playwright/test';
import {HomePage} from "../pom/HomePage";
import {Header} from "../pom/Header";
import {Footer} from "../pom/Footer";

test.describe('Home page', () => {
    test.describe('Page load checks', () => {
        test('Smoke - Home page loads successfully', async ({page}) => {
            const homePage = new HomePage(page);

            await homePage.visit();
            await homePage.checkPageUrl();
            await expect(page).toHaveTitle(/My Store/i);
        });
    });
});

