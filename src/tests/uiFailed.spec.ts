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

        test('Home page title matches the expected brand', async ({page}) => {
            const homePage = new HomePage(page);

            await homePage.visit();
            await expect(page).toHaveTitle(/My Store/i);
        });
    });

    test.describe('Header section', () => {
        test('Header is visible on the home page', async ({page}) => {
            const homePage = new HomePage(page);
            const header = new Header(page);

            await homePage.visit();
            await header.checkContainer();
        });
    });

    test.describe('Footer section', () => {
        test('Footer is visible on the home page', async ({page}) => {
            const homePage = new HomePage(page);
            const footer = new Footer(page);

            await homePage.visit();
            await footer.checkContainer();
        });
    });
});

